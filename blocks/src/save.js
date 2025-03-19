import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function for the Team Showcase block.
 * This block is dynamic and rendered on the server, so we return null.
 *
 * @return {null} Nothing to save, this is a dynamic block.
 */
export default function Save() {
    return null; // Dynamic block rendered via PHP
}
