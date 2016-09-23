page{

  headerData{
    
    10 = TEXT
    10.field = title // nav_title
    10.wrap = <title>|</title>

    22 = HMENU
    22 {
      special = language
      #Sprach IDs eintragen
      special.value = 0,2
      1 = TMENU
      1 {
        NO = 1
        NO {
          stdWrap.cObject = TEXT
          stdWrap.cObject {
            value = de || en
          }
          linkWrap = <link rel="alternate" hreflang="|
          doNotLinkIt = 1
          after.cObject = TEXT
          after.cObject {
            stdWrap {
              wrap = " href="|" />
              typolink {
                parameter.data = page:uid
                additionalParams = &L=0 || &L=2
                returnLast = url
                forceAbsoluteUrl = 1
                addQueryString = 1
              }
            }
          }
        }
        CUR = 1
        CUR {
          doNotShowLink = 1
        }
      }
    }

    25 = TEXT
    25 {
      typolink.parameter.data = TSFE:id
      typolink.returnLast = url
      typolink.forceAbsoluteUrl = 1
      typolink.addQueryString = 1
      typolink.addQueryString.method = GET
      wrap = <link rel="canonical" href="|" />
    }


    50 = TEXT 
    50.value (
        <meta name="viewport" content="width=device-width, user-scalable=no" />

        <link rel="apple-touch-icon" href="favicons/icon-57x57.png" sizes="57x57" />
        <link rel="apple-touch-icon" href="favicons/icon-60x60.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="favicons/icon-72x72.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="favicons/icon-76x76.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="favicons/icon-114x114.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="favicons/icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="favicons/icon-144x144.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="favicons/icon-152x152.png" sizes="152x152" />
        <link rel="icon" type="image/png" href="favicons/icon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="favicons/icon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicons/icon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="favicons/icon-160x160.png" sizes="160x160" />
        <link rel="icon" type="image/png" href="favicons/icon-196x196.png" sizes="196x196" />
        <meta name="application-name" content="" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-square70x70logo" content="favicons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="favicons/mstile-150x150.png" />
        <meta name="msapplication-square310x310logo" content="favicons/mstile-310x310.png" />
        <meta name="msapplication-wide310x150logo" content="favicons/mstile-310x150.png" />
        <meta name="msapplication-TileImage" content="favicons/mstile-150x150.png" />
        <link rel="shortcut icon" href="icon.ico" />

        <!--[if gte IE 9]><!-->
          <link rel="stylesheet" href="{$myConst.template.dir}screen.min.css"/>
          <style type="text/css"> .gradient { filter: none; } </style>
        <!--<![endif]-->
        <!--[if lt IE 9]>
          <link rel="stylesheet" href="{$myConst.template.dir}screen-IE.min.css"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
        <![endif]-->

        <script src="{$myConst.template.dir}script.min.js" async></script>


      )
  }

  meta{
    keywords.stdWrap.cObject = COA
    keywords.stdWrap.cObject {
      5 = TEXT
      5.field = title
      5.stdWrap.wrap = |, 
      10 = TEXT
      10.field = keywords
      10.stdWrap.wrap = |, 
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
    description.stdWrap.cObject = COA
    description.stdWrap.cObject {
      10 = TEXT
      10.field = description
      10.stdWrap.wrap = |,
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
    abstract.stdWrap.cObject = COA
    abstract.stdWrap.cObject {
      10 = TEXT
      10.field = abstract
      10.stdWrap.wrap = |,
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
    author.stdWrap.cObject = COA
    author.stdWrap.cObject {
      10 = TEXT
      10.field = author
      10.stdWrap.wrap = |,
      10.stdWrap.required = 1
      10.ifEmpty.wrap = 
    }
  }



}