#<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/ktempl/ts/default/clearOutput.ts">
    <INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/ktempl/ts/default/config.ts">
    <INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/ktempl/ts/default/metadata.ts">

lib.mainnav = HMENU
lib.mainnav {
  wrap = |
  1 = TMENU
  1 {
    noBlur = 1
    expAll = 1
    NO {
      wrapItemAndSub = <li class="li-1 no-js">|</li>
      wrapItemAndSub.insertData = 1
      ATagTitle.field = title
      stdWrap.titleText = a
      stdWrap.dataWrap = <span class="span-1">|</span>
      ATagParams = class="a-1"
    }
    ACT = 1
    ACT {
      wrapItemAndSub = <li class="active li-1 cat{field:uid}">|</li>
      wrapItemAndSub.insertData = 1
      stdWrap.dataWrap = <span class="span-1">|</span>
      ATagParams = class="active a-1"
    }
  }
  2 < .1
  2 {
    wrap = <ul class="ul-2">|</ul>
        NO {
      wrapItemAndSub = <li class="li-2">|</li>
      ATagTitle.field = title
      stdWrap.titleText = a
      stdWrap.dataWrap = <span class="span-2">|</span>
      ATagParams = class="a-2"
    }
    ACT = 1
    ACT {
      linkWrap = <li class="active li-2">|
      stdWrap.dataWrap = <span class="span-2">|</span>
      ATagParams = class="active a-2"
    }
  }
  3 < .2
  3 {
    wrap = <ul class="ul-3">|</ul>
        NO {
      wrapItemAndSub = <li class="li-3">|</li>
      ATagTitle.field = title
      stdWrap.titleText = a
      stdWrap.dataWrap = <span class="span-3">|</span>
      ATagParams = class="a-3"
    }
    ACT = 1
    ACT {
      linkWrap = <li class="active li-3">|
      stdWrap.dataWrap = <span class="span-3">|</span>
      ATagParams = class="active a-3"
    }
  }
}


lib.subnav = HMENU
lib.subnav {
  entryLevel = 1
  stdWrap.wrap = <nav class="com-mobile-subnav"><ul class=" ul-1">|</ul></nav>
  stdWrap.required = 1
  1 = TMENU
  1 {
    noBlur = 1
    expAll = 1
    NO {
      wrapItemAndSub = <li class="li-1 no-js">|</li>
      wrapItemAndSub.insertData = 1
      ATagTitle.field = title
      stdWrap.titleText = a
      stdWrap.dataWrap = <span class="span-1">|</span>
      ATagParams = class="a-1"
    }
    ACT = 1
    ACT {
      wrapItemAndSub = <li class="active li-1 cat{field:uid}">|</li>
      wrapItemAndSub.insertData = 1
      stdWrap.dataWrap = <span class="span-1">|</span>
      ATagParams = class="active a-1"
    }
  }
}

lib.form = CONTENT
lib.form {
  table = tt_content
  select {
    orderBy = sorting
    where = colPos = 0
    languageField = sys_language_uid
    andWhere = CType = 'mailform'
  }
}

[globalVar = GP:L = 2]
lib.language = TEXT
lib.language.value = EN
    [global]

page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
  format = html
  languageField = sys_language_uid
  file = typo3conf/ext/ktempl/main.html
  partialRootPath = typo3conf/ext/ktempl/
  layoutRootPath = typo3conf/ext/ktempl/

      dataProcessing {
    10 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
    10 {
      table = tt_content
      orderBy = sorting
      languageField = sys_language_uid
      as = content
      dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        10 {
          languageField = sys_language_uid
          references.fieldName = assets
        }
      }
    }
  }
}
