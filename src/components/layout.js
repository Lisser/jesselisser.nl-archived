import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Navbar from './navbar';
import Footer from './footer';

import "../index.scss";

const Layout = ({ children }) => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const intervalHandle = setInterval(() => {
      if (window.SimplybookWidget) {
        setLoaded(true);
        clearInterval(intervalHandle);
      }
    }, 100);
  }, [])

  useEffect(() => {
    if (loaded) {
      window.widget = new window.SimplybookWidget({"widget_type":"button","url":"https://lissertech.simplybook.it","theme":"default","theme_settings":{"timeline_show_end_time":"1","timeline_modern_display":"as_slots","sb_base_color":"#33bb60","display_item_mode":"list","booking_nav_bg_color":"#d1e9c6","body_bg_color":"#f7f7f7","dark_font_color":"#494949","light_font_color":"#ffffff","btn_color_1":"#5e7da7","sb_company_label_color":"#ffffff","hide_img_mode":"0","show_sidebar":"1","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"inline_datepicker","is_rtl":false,"app_config":{"predefined":[]},"button_title":"Book now","button_background_color":"#33bb60","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
    }
  });

  return (
    <div className="site">
      <Helmet>
        <script src="https://simplybook.it/v2/widget/widget.js"></script>
      </Helmet>
      <Navbar></Navbar>
      <div className="site-content">{children}</div>
      <Footer></Footer>
    </div>
  );
}


export default Layout;
