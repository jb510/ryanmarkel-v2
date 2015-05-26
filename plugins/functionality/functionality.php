<?php
/**
 * Plugin Name: Functionality Plugin
 * Plugin URI: http://ryanmarkel.com/
 * Description: Where we put things that are for other things.
 * Version: 1.0
 * Author: Ryan Markel
 * Author URI: http://ryanmarkel.com/
 */
 
add_filter( 'jetpack_sso_bypass_login_forward_wpcom', '__return_true' );
