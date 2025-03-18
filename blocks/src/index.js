// blocks/src/index.js
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('tsteam/team-showcase', {
    edit: Edit,
    save: Save,
});
