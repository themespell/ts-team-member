<?php
namespace TSTeam;

use TSTeam\TeamMember;
use TSTeam\TeamShowcase;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AJAX {

	public static function init() {
		$self = new self();
		TeamMember::init();
		TeamShowcase::init();
	}
}
