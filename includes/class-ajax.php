<?php
namespace TSTeam;

use TSTeam\TeamMember;
use TSTeam\TeamShowcase;
use TSTeam\MemberCategory;
use TSTeam\Migration;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class AJAX {

	public static function init() {
		$self = new self();
		TeamMember::init();
		TeamShowcase::init();
		MemberCategory::init();
		Migration::init();
	}
}
