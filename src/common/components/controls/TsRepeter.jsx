import { Form, Button } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import globalSettings from '../../utils/globalSettings';

const TsRepeter = ({ label, prefix, fields }) => {
  return (
    <div className="mb-4">
      {label && (
        <label 
        className="block text-sm font-medium text-gray-700 mb-2"
        style={
          {
            color: globalSettings.theme.textColor,
          }
        }
        >{label}</label>
      )}
    <Form.List name={prefix}>
      {(fieldsInstance, { add, remove }) => (
        <>
          {fieldsInstance.map(({ key, name, ...restField }) => (
            
                <div className='flex'>
              {fields.map((field, index) => (
                <Form.Item
                  {...restField}
                  key={`${key}-${index}`}
                  name={[name, field.name]}
                  rules={field.rules}
                >
                  {field.component}
                </Form.Item>
              ))}
              <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => add()}
              icon={<PlusOutlined />}
            >
              Add Field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    </div>
  );
};

export default TsRepeter;