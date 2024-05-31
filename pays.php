<?php
/*
Plugin Name: Les pays
Description: Affiche les articles par pays.
Version: 1.0
Author: Lenny Tran
*/

function eddym_enqueue_voyage()
{
    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/pays.js");
    wp_enqueue_style(   'em_plugin_voyage_css',
                        plugin_dir_url(__FILE__) . "style.css",
                        array(),
                        $version_css);

    wp_enqueue_script(  'em_plugin_voyage_js',
                        plugin_dir_url(__FILE__) ."js/voyage.js",
                        array(),
                        $version_js,
                        true);
}
add_action('wp_enqueue_scripts', 'eddym_enqueue_voyage');

function creation_liste_pays(){
    $listePays = ["France","États-Unis", "Canada", "Argentine", "Chili", "Belgique", "Maroc", "Mexique", "Japon", "Italie", "Islande", "Chine", "Grèce", "Suisse"];
    $menu = '<ul class="pays-menu">';
    foreach ($listePays as $pays) {
        $menu .= '<li><a href="#" data-country-name="' . $pays . '">' . $pays . '</a></li>';
    }
    $menu .= '</ul>';
    $contenu = '<button class="bouton__ouvrir">Ouvrir</button>' . $menu . '<div class="contenu__restapi__pays"></div>';
    return $contenu;
}

add_shortcode('em_pays', 'creation_liste_pays');