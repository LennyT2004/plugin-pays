<?php
/*
Plugin Name: Les pays
Description: Affiche les articles par pays.
Version: 1.0
Author: Lenny Tran
*/

function creation_destinations(){
    $listePays = ["France","États-Unis", "Canada", "Argentine", "Chili", "Belgique", "Maroc", "Mexique", "Japon", "Italie", "Islande", "Chine", "Grèce", "Suisse"];
    $menu = '<ul class="pays-menu-unique">';
    foreach ($listePays as $pays) {
        $menu .= '<li><a href="#" data-country-name-unique="' . $pays . '">' . $pays . '</a></li>';
    }
    $menu .= '</ul>';
    $contenu = '<button class="bouton__ouvrir-unique">Ouvrir</button>' . $menu . '<div class="contenu__restapi-unique"></div>';
    return $contenu;
}

function enqueue_scripts() {
    wp_enqueue_script('my-script', plugin_dir_url(__FILE__) . 'js/pays.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');

add_shortcode('em_pays', 'creation_destinations');