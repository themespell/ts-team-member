import { useState, useEffect } from 'react';
import { Button, Card, Alert, Space, Statistic, Row, Col, Badge, Timeline, Tag, message, Modal, Tooltip, Progress } from 'antd';
import { PlayCircleOutlined, DeleteOutlined, CheckCircleOutlined, CloseCircleOutlined, WarningOutlined, LoadingOutlined, EyeOutlined, DownloadOutlined, ThunderboltOutlined, ExperimentOutlined, SettingOutlined, CopyOutlined, BugOutlined } from '@ant-design/icons';
import { fetchData } from '../../common/services/fetchData.js';

function QATester() {
    const [testResults, setTestResults] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [currentTest, setCurrentTest] = useState('');
    const [error, setError] = useState('');
    const [hasOldData, setHasOldData] = useState(false);

    // Check for existing test data on mount
    useEffect(() => {
        fetchData('tsteam/qa_tester/check_existing', (response) => {
            if (response.success && response.data.has_existing_data) {
                setHasOldData(true);
            }
        });
    }, []);

    const runTests = () => {
        setIsRunning(true);
        setError('');
        setCurrentTest('Starting tests...');
        setTestResults(null);

        fetchData('tsteam/qa_tester/run_tests', (response) => {
            setIsRunning(false);
            setCurrentTest('');

            if (response.success) {
                // Check if no team members exist
                const noMembersTest = response.data.tests?.find(t => t.no_members);
                if (noMembersTest) {
                    Modal.warning({
                        title: 'No Team Members Found',
                        content: 'Please use the Team Member Generator to create some team members before running tests.',
                        okText: 'Got it'
                    });
                    setError(noMembersTest.message);
                    return;
                }

                setTestResults(response.data);
                setHasOldData(false);
                message.success('All tests completed successfully!');
            } else {
                setError(response?.data?.message || 'Tests failed to run');
                message.error('Tests failed to run');
            }
        });
    };

    const cleanupTestData = () => {
        Modal.confirm({
            title: 'Cleanup Test Data',
            content: 'Are you sure you want to delete all test data? This will delete test pages, showcases, categories, and member data.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                setIsRunning(true);
                setCurrentTest('Cleaning up...');

                fetchData('tsteam/qa_tester/cleanup', (response) => {
                    setIsRunning(false);
                    setCurrentTest('');

                    if (response.success) {
                        message.success(response.data.message);
                        setTestResults(null);
                        setHasOldData(false);
                    } else {
                        message.error('Cleanup failed');
                    }
                });
            }
        });
    };

    const downloadReport = () => {
        if (!testResults) return;

        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                total: testResults.passed + testResults.failed + testResults.warnings,
                passed: testResults.passed,
                failed: testResults.failed,
                warnings: testResults.warnings
            },
            testData: testResults.test_data,
            tests: testResults.tests
        };

        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `qa-test-report-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        message.success('Report downloaded successfully!');
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        message.success('URL copied to clipboard!');
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'passed':
                return <CheckCircleOutlined className="text-green-500" />;
            case 'failed':
                return <CloseCircleOutlined className="text-red-500" />;
            case 'warning':
                return <WarningOutlined className="text-yellow-500" />;
            default:
                return <WarningOutlined className="text-gray-500" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'passed': return 'success';
            case 'failed': return 'error';
            case 'warning': return 'warning';
            default: return 'default';
        }
    };

    const getProgressPercent = () => {
        if (!testResults) return 0;
        const total = testResults.passed + testResults.failed + testResults.warnings;
        if (total === 0) return 0;
        return Math.round((testResults.passed / total) * 100);
    };

    return (
        <div style={{ padding: '24px', minHeight: '100vh', background: '#f0f2f5' }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {/* Header Card */}
                <Card>
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Space direction="vertical" size={0}>
                                <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
                                    <BugOutlined style={{ marginRight: 8, color: '#1890ff' }} />
                                    QA Tester
                                </h1>
                                <span style={{ color: '#666' }}>
                                    Automated testing for TS Team Member plugin functionality
                                </span>
                            </Space>
                        </Col>
                        <Col>
                            <Space>
                                <Button
                                    type="primary"
                                    icon={<PlayCircleOutlined />}
                                    onClick={runTests}
                                    disabled={isRunning}
                                    size="large"
                                >
                                    {isRunning ? 'Running...' : 'Run All Tests'}
                                </Button>
                                {testResults && (
                                    <Button
                                        icon={<DownloadOutlined />}
                                        onClick={downloadReport}
                                    >
                                        Export Report
                                    </Button>
                                )}
                                <Button
                                    danger
                                    icon={<DeleteOutlined />}
                                    onClick={cleanupTestData}
                                    disabled={isRunning}
                                >
                                    {testResults ? 'Cleanup' : 'Force Cleanup'}
                                </Button>
                            </Space>
                        </Col>
                    </Row>

                    {currentTest && (
                        <Alert
                            message={currentTest}
                            type="info"
                            icon={<LoadingOutlined spin />}
                            style={{ marginTop: 16 }}
                        />
                    )}

                    {error && (
                        <Alert
                            message={error}
                            type="error"
                            showIcon
                            closable
                            style={{ marginTop: 16 }}
                        />
                    )}

                    {hasOldData && !testResults && (
                        <Alert
                            message="Old test data detected!"
                            description="Click 'Force Cleanup' to delete old data before running new tests."
                            type="warning"
                            showIcon
                            closable
                            style={{ marginTop: 16 }}
                        />
                    )}
                </Card>

                {/* Results Summary */}
                {testResults && (
                    <>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Card>
                                    <Statistic
                                        title="Total Tests"
                                        value={testResults.passed + testResults.failed + testResults.warnings}
                                        prefix={<ExperimentOutlined />}
                                        valueStyle={{ color: '#1890ff' }}
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card>
                                    <Statistic
                                        title="Passed"
                                        value={testResults.passed}
                                        prefix={<CheckCircleOutlined />}
                                        valueStyle={{ color: '#52c41a' }}
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card>
                                    <Statistic
                                        title="Failed"
                                        value={testResults.failed}
                                        prefix={<CloseCircleOutlined />}
                                        valueStyle={{ color: '#ff4d4f' }}
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                                <Card>
                                    <Statistic
                                        title="Warnings"
                                        value={testResults.warnings}
                                        prefix={<WarningOutlined />}
                                        valueStyle={{ color: '#faad14' }}
                                    />
                                </Card>
                            </Col>
                        </Row>

                        {/* Progress Bar */}
                        <Card title="Overall Progress">
                            <Progress
                                percent={getProgressPercent()}
                                status={getProgressPercent() === 100 ? 'success' : 'active'}
                                strokeColor={{
                                    '0%': '#ff4d4f',
                                    '50%': '#faad14',
                                    '100%': '#52c41a',
                                }}
                            />
                        </Card>

                        {/* Test Data Info */}
                        <Card title={<><SettingOutlined /> Test Data Created</>}>
                            <Row gutter={16}>
                                <Col span={6}>
                                    <Card size="small" bordered={false}>
                                        <span style={{ color: '#666' }}>Category ID</span>
                                        <br />
                                        <code>{testResults.test_data.category_id || 'N/A'}</code>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card size="small" bordered={false}>
                                        <span style={{ color: '#666' }}>Member IDs</span>
                                        <br />
                                        <code>{testResults.test_data.member_ids?.length || 0} members</code>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card size="small" bordered={false}>
                                        <span style={{ color: '#666' }}>Main Showcase ID</span>
                                        <br />
                                        <code>{testResults.test_data.main_showcase_id || 'N/A'}</code>
                                    </Card>
                                </Col>
                                <Col span={6}>
                                    <Card size="small" bordered={false}>
                                        <span style={{ color: '#666' }}>Total Showcases</span>
                                        <br />
                                        <code>{testResults.test_data.showcase_ids?.length || 0}</code>
                                    </Card>
                                </Col>
                            </Row>

                            {/* Preview Pages Section */}
                            {(testResults.test_data.all_previews || testResults.test_data.preview_pages) && (
                                <div style={{ marginTop: 24 }}>
                                    <h4 style={{ marginBottom: 16 }}><EyeOutlined /> Preview Pages for Manual Verification</h4>
                                    <Row gutter={[16, 16]}>
                                        {(testResults.test_data.all_previews || testResults.test_data.preview_pages || []).map((preview, idx) => (
                                            <Col xs={24} sm={12} lg={8} key={idx}>
                                                <Card
                                                    size="small"
                                                    title={preview.title}
                                                    extra={
                                                        <Tooltip title="Showcase ID">
                                                            <Tag color="blue">ID: {preview.showcase_id}</Tag>
                                                        </Tooltip>
                                                    }
                                                    hoverable
                                                    actions={[
                                                        <a
                                                            href={preview.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{ color: '#722ed1' }}
                                                        >
                                                            <EyeOutlined /> Preview
                                                        </a>,
                                                        <a onClick={() => copyToClipboard(preview.url)} style={{ color: '#666' }}>
                                                            <CopyOutlined /> Copy URL
                                                        </a>
                                                    ]}
                                                >
                                                    <p style={{ color: '#666', marginBottom: 12, minHeight: 40 }}>
                                                        {preview.description || 'No description'}
                                                    </p>
                                                    <Space size={4}>
                                                        <Tag color="blue">{preview.layout}</Tag>
                                                        <Tag color="green">{preview.view}</Tag>
                                                        <Tag color="purple">{preview.details}</Tag>
                                                    </Space>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                    <Alert
                                        message={<strong>Manual Verification:</strong>}
                                        description="Click each preview above to verify different layouts, views, and detail modes work correctly on the frontend."
                                        type="info"
                                        showIcon
                                        style={{ marginTop: 16 }}
                                    />
                                </div>
                            )}

                            {!(testResults.test_data.all_previews || testResults.test_data.preview_pages) && testResults.test_data.preview_url && (
                                <Space style={{ marginTop: 16 }}>
                                    <Button
                                        type="primary"
                                        icon={<EyeOutlined />}
                                        onClick={() => window.open(testResults.test_data.preview_url, '_blank')}
                                    >
                                        Preview Showcase Page
                                    </Button>
                                </Space>
                            )}
                        </Card>
                    </>
                )}

                {/* Detailed Test Results */}
                {testResults && (
                    <Card title={<><ThunderboltOutlined /> Detailed Test Results</>}>
                        <Timeline
                            items={testResults.tests.map((test, index) => {
                                const checks = [
                                    ...(test.visual_checks || []),
                                    ...(test.functional_checks || []),
                                    ...(test.carousel_checks || []),
                                    ...(test.html_checks || []),
                                    ...(test.field_tests || []),
                                    ...(test.setting_tests || []),
                                    ...(test.layout_tests?.map(l => ({ ...l, name: l.layout })) || []),
                                ];

                                return {
                                    dot: getStatusIcon(test.status),
                                    color: getStatusColor(test.status),
                                    children: (
                                        <Card
                                            size="small"
                                            style={{
                                                borderLeft: `4px solid ${test.status === 'passed' ? '#52c41a' : test.status === 'warning' ? '#faad14' : '#ff4d4f'}`,
                                                marginLeft: 8
                                            }}
                                        >
                                            <Row justify="space-between" align="start">
                                                <Col span={18}>
                                                    <h4 style={{ margin: 0 }}>{test.name}</h4>
                                                    <p style={{ color: '#666', margin: '4px 0' }}>{test.description}</p>
                                                    <p style={{ margin: 0 }}>
                                                        <strong>Result:</strong> {test.message}
                                                    </p>
                                                </Col>
                                                <Col>
                                                    <Badge
                                                        status={getStatusColor(test.status)}
                                                        text={test.status.toUpperCase()}
                                                        style={{ fontSize: 12 }}
                                                    />
                                                </Col>
                                            </Row>

                                            {/* Visual/Functional Checks */}
                                            {(test.visual_checks || test.functional_checks || test.responsive_checks) && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>Checks:</h5>
                                                    <Space size={4} wrap>
                                                        {(test.visual_checks || []).map((check, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={check.status === 'found' ? 'success' : 'error'}
                                                                icon={check.status === 'found' ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
                                                            >
                                                                {check.name}
                                                                {check.required && check.status !== 'found' && '!'}
                                                            </Tag>
                                                        ))}
                                                        {(test.functional_checks || []).map((check, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={check.status === 'found' || check.status === 'enqueued' ? 'success' : 'error'}
                                                            >
                                                                {check.name}
                                                            </Tag>
                                                        ))}
                                                        {(test.responsive_checks || []).map((check, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={check.status === 'found' ? 'success' : 'error'}
                                                            >
                                                                {check.name}
                                                            </Tag>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}

                                            {/* Layout Tests */}
                                            {test.layouts && test.layouts.length > 0 && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>Layout Tests:</h5>
                                                    <Space size={4} wrap>
                                                        {test.layouts.map((layout, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={layout.status === 'passed' ? 'success' : 'error'}
                                                                icon={getStatusIcon(layout.status)}
                                                            >
                                                                {layout.name}
                                                            </Tag>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}

                                            {/* Setting Tests */}
                                            {test.setting_tests && test.setting_tests.length > 0 && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>Editor Control Tests:</h5>
                                                    <Space size={4} wrap>
                                                        {test.setting_tests.map((setting, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={setting.status === 'passed' ? 'success' : 'error'}
                                                            >
                                                                {setting.name}: <code>{setting.value}</code>
                                                            </Tag>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}

                                            {/* Field Tests */}
                                            {test.field_tests && test.field_tests.length > 0 && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>Field Tests:</h5>
                                                    <Space size={4} wrap>
                                                        {test.field_tests.map((field, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={field.status === 'present' || field.status === 'valid' ? 'success' : 'error'}
                                                            >
                                                                {field.field}
                                                            </Tag>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}

                                            {/* Layout Frontend Tests */}
                                            {test.layout_tests && test.layout_tests.length > 0 && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>Frontend Layout Tests:</h5>
                                                    <Space direction="vertical" size={4} style={{ width: '100%' }}>
                                                        {test.layout_tests.map((layoutTest, idx) => (
                                                            <Card
                                                                key={idx}
                                                                size="small"
                                                                style={{
                                                                    background: layoutTest.status === 'passed' ? '#f6ffed' : '#fff1f0',
                                                                    borderLeft: `3px solid ${layoutTest.status === 'passed' ? '#52c41a' : '#ff4d4f'}`
                                                                }}
                                                            >
                                                                <Row justify="space-between" align="middle">
                                                                    <Col>
                                                                        <Space>
                                                                            {getStatusIcon(layoutTest.status)}
                                                                            <strong>{layoutTest.layout}</strong>
                                                                        </Space>
                                                                    </Col>
                                                                    <Col>
                                                                        <Badge
                                                                            status={getStatusColor(layoutTest.status)}
                                                                            text={layoutTest.status.toUpperCase()}
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                                {layoutTest.error && (
                                                                    <p style={{ color: '#ff4d4f', marginTop: 8, fontSize: 12 }}>
                                                                        {layoutTest.error}
                                                                    </p>
                                                                )}
                                                            </Card>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}

                                            {/* Details Tests */}
                                            {test.details_tests && test.details_tests.length > 0 && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>Details Tests:</h5>
                                                    <Space size={4} wrap>
                                                        {test.details_tests.map((detail, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={detail.status === 'passed' ? 'success' : 'error'}
                                                            >
                                                                {detail.name}: {detail.value}
                                                            </Tag>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}

                                            {/* View Tests */}
                                            {test.views && (
                                                <div style={{ marginTop: 12 }}>
                                                    <h5 style={{ fontSize: 12, color: '#666' }}>View Tests:</h5>
                                                    <Space size={4} wrap>
                                                        {test.views.map((view, idx) => (
                                                            <Tag
                                                                key={idx}
                                                                color={view.status === 'passed' ? 'success' : 'error'}
                                                                icon={getStatusIcon(view.status)}
                                                            >
                                                                {view.name}
                                                            </Tag>
                                                        ))}
                                                    </Space>
                                                </div>
                                            )}
                                        </Card>
                                    ),
                                };
                            })}
                        />
                    </Card>
                )}

                {/* Info Section */}
                {!testResults && (
                    <Card title={<><ExperimentOutlined /> Test Coverage</>}>
                        <Row gutter={[16, 16]}>
                            <Col xs={24} sm={12} lg={8}>
                                <Card type="inner" title="Data Creation" size="small">
                                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                                        <li>Create member category</li>
                                        <li>Use existing team members</li>
                                        <li>Create multiple showcases (6 configurations)</li>
                                        <li>Create test page with shortcode</li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} lg={8}>
                                <Card type="inner" title="Frontend Rendering" size="small">
                                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                                        <li>Actual HTML fetching from pages</li>
                                        <li>Layout container verification</li>
                                        <li>Image element presence check</li>
                                        <li>Loading error detection</li>
                                        <li>Layout-specific elements</li>
                                    </ul>
                                </Card>
                            </Col>
                            <Col xs={24} sm={12} lg={8}>
                                <Card type="inner" title="Editor Controls" size="small">
                                    <ul style={{ paddingLeft: 16, margin: 0 }}>
                                        <li>Layout selection (5 types)</li>
                                        <li>View type (4 modes)</li>
                                        <li>Columns (responsive)</li>
                                        <li>Spacing & Colors</li>
                                        <li>Typography settings</li>
                                    </ul>
                                </Card>
                            </Col>
                        </Row>
                        <Alert
                            message={<strong>How it works:</strong>}
                            description="The QA Tester uses your existing team members to create test showcases and preview pages. It then fetches the actual rendered HTML to verify all elements are present and working correctly."
                            type="info"
                            showIcon
                            style={{ marginTop: 16 }}
                        />
                    </Card>
                )}
            </Space>
        </div>
    );
}

export default QATester;
