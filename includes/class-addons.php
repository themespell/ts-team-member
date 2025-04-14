<?php
namespace TSTeam;

use TSTeam\Gutenberg;
use TSTeam\Elementor;

if (!defined('ABSPATH')) {
    exit;
}

class Addons {
    public static function init() {
        $self = new self();
        Gutenberg::init();
        Elementor::init();
    }
}