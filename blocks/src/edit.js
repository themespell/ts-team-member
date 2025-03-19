import { useBlockProps } from '@wordpress/block-editor';
import { SelectControl, Placeholder, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';

/**
 * The edit function for the Team Showcase block.
 *
 * @param {Object} props Block props.
 * @return {JSX.Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { teamId } = attributes;

    // Fetch all tsteam_showcase posts
    const { teamOptions, isLoading } = useSelect((select) => {
        const posts = select('core').getEntityRecords('postType', 'tsteam-showcase', {
            per_page: -1,
            _fields: ['id', 'title']
        });

        return {
            teamOptions: posts ? [
                { value: '', label: __('Select a Team Showcase', 'tsteam-showcase') },
                ...posts.map((post) => ({
                    value: post.id.toString(),
                    label: post.title.rendered || `#${post.id} (No title)`
                }))
            ] : [],
            isLoading: select('core/data').isResolving('core', 'getEntityRecords', [
                'postType',
                'tsteam-showcase',
                { per_page: -1, _fields: ['id', 'title'] }
            ])
        };
    }, []);

    // Loading state
    if (isLoading) {
        return (
            <div {...blockProps}>
                <Placeholder
                    icon="groups"
                    label={__('Team Showcase', 'tsteam-showcase')}
                >
                    <Spinner />
                    {__('Loading team showcases...', 'tsteam-showcase')}
                </Placeholder>
            </div>
        );
    }

    return (
        <div {...blockProps}>
            <div className="tsteam-showcase-controls">
                <SelectControl
                    label={__('Select Team Showcase', 'tsteam-showcase')}
                    value={teamId}
                    options={teamOptions}
                    onChange={(value) => setAttributes({ teamId: value })}
                />
            </div>

            {teamId ? (
                <div className="tsteam-showcase-preview">
                    <ServerSideRender
                        block="tsteam/team-showcase"
                        attributes={{ teamId }}
                    />
                </div>
            ) : (
                <Placeholder
                    icon="groups"
                    label={__('Team Showcase', 'tsteam-showcase')}
                    instructions={__('Please select a team showcase to display', 'tsteam-showcase')}
                />
            )}
        </div>
    );
}