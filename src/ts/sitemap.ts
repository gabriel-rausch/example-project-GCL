xmlSitemap = PAGE
xmlSitemap {
    config {
        xhtml_cleaning = none
        no_cache = 1
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type: text/xml; charset=utf-8
        simulateStaticDocuments = 0
        tx_realurl_enable = 1
    }
    wrap (
        <?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.google.com/schemas/sitemap/0.84"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemalocation="http://www.google.com/schemas/sitemap/0.84 www.google.com/schemas/sitemap/0.84/sitemap.xsd
    ">|</urlset>
)

    10 = COA
    10 {
        10 = HMENU
        10 {
            special = list
            special.value = 1

            includeNotInMenu = 1

            # exlude: suche, agbs
            excludeUidList = 27, 24

            1 = TMENU
            1 {
                expAll = 1
                NO {
                    doNotLinkIt = 1
                    stdWrap {
                        cObject = COA
                        cObject {
                            wrap = <url>|</url>
                            10 = TEXT
                            10 {
                                typolink {
                                    parameter.field = uid
                                    returnLast = url
                                    forceAbsoluteUrl = 1
                                }
                                wrap = <loc>|</loc>
                            }
                            20 = TEXT
                            20 {
                                field = SYS_LASTCHANGED
                                strftime = %Y-%m-%dT%H:%M:%SZ
                                wrap = <lastmod>|</lastmod>
                            }
                            30 = TEXT
                            30.value = <priority>1.0</priority>
                            if.isFalse.field = shortcut
                            30 = TEXT
                            30.value = <priority>1.0</priority>
                            if.isFalse.field = shortcut
                        }
                    }
                }
            }
            2 < .1
            2.NO.stdWrap.cObject.30.value = <priority>0.9</priority>
                3 < .1
            3.NO.stdWrap.cObject.30.value = <priority>0.8</priority>
                4 < .1
            4.NO.stdWrap.cObject.30.value = <priority>0.7</priority>
                5 < .1
            5.NO.stdWrap.cObject.30.value = <priority>0.6</priority>
                6 < .1
            6.NO.stdWrap.cObject.30.value = <priority>0.5</priority>
                7 < .6
            8 < .6
            9 < .6
            10 < .6
        }
    }