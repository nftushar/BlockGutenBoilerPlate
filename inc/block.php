<?php
class BDBBlockDirectory{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'bdb-block-directory-style', plugins_url( 'dist/style.css', __DIR__ ), [], BDB_PLUGIN_VERSION ); // Style
		wp_register_style( 'bdb-block-directory-editor-style', plugins_url( 'dist/editor.css', __DIR__ ), [ 'bdb-block-directory-style' ], BDB_PLUGIN_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'bdb-block-directory-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'bdb-block-directory-editor-script', 'block-directory', plugin_dir_path( __DIR__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

        wp_enqueue_style('bdb-block-directory-style');
        wp_enqueue_script( 'bdb-block-directory-script', plugins_url( 'dist/script.js', __DIR__ ), [ 'react', 'react-dom' ], BDB_PLUGIN_VERSION, true );

		$className = $className ?? '';
		$bdbBlockClassName = 'wp-block-bdb-block-directory ' . $className . ' align' . $align;

		ob_start(); ?>
		<div class='<?php echo esc_attr( $bdbBlockClassName ); ?>' id='bdbBlockDirectory-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BDBBlockDirectory();