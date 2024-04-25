<?php
// Chant extension, https://github.com/GiovanniSalmeri/yellow-chant

class YellowChant {
    const VERSION = "0.9.1";
    public $yellow;         // access to API
    
    // Handle initialisation
    public function onLoad($yellow) {
        $this->yellow = $yellow;
    }
   
    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name=="header") {
            $assetLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreAssetLocation");
            $output .= "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"{$assetLocation}chant.css\" />\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$assetLocation}chant-exsurge.min.js\"></script>\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$assetLocation}chant.js\"></script>\n";
        }
        return $output;
    }
}
