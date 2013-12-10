<div id="sharing-tab2">
    <div id="sharing-tab2-container">
        <a id="facebook" href="http://www.facebook.com/sharer.php?u=<?php print $GLOBALS['base_url'] . request_uri(); ?>?real_title=<? print drupal_get_title(); ?>"><img alt="Facebook share link" src="<?php global $base_path; print $base_path.path_to_theme(); ?>/images/facebook.png" /></a>
        <a id="twitter" href="http://twitter.com/share?url=<?php print $GLOBALS['base_url'] . request_uri(); ?>&text=<? print drupal_get_title(); ?> at UW Information School"  rel="nofollow"><img alt="Twitter share link" src="<?php global $base_path; print $base_path.path_to_theme(); ?>/images/twitter.png" /></a>
        <a id="linkedin" href="https://www.linkedin.com/cws/share?url=<?php print $GLOBALS['base_url'] . request_uri(); ?>"><img alt="LinkedIn share link" src="<?php global $base_path; print $base_path.path_to_theme(); ?>/images/linkedin.png" /></a>
        <a href="mailto:?subject=I wanted you to see this iSchool page&amp;body=Check out this page <?php print $GLOBALS['base_url'] . request_uri(); ?>"><img alt="Website share link" src="<?php global $base_path; print $base_path.path_to_theme(); ?>/images/email.png" /></a>
    </div>
</div>