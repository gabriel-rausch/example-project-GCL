
# typoscript clear all wraps and comments

# tt_content.stdWrap.innerWrap.cObject >
# tt_content.stdWrap.innerWrap2 >
# tt_content.dataWrap >
# tt_content.prepend >
# tt_content.textpic.20.text.10.10.stdWrap.dataWrap >
# tt_content.image.20.imageStdWrap.dataWrap >
# tt_content.image.20.imageStdWrapNoWidth.wrap >
# tt_content.image.20.imageColumnStdWrap.dataWrap >
# tt_content.image.20.layout.default.value = ###IMAGES######TEXT###
# tt_content.image.20.layout.1.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.2.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.8.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.9.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.10.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.17.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.18.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.25.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.layout.26.value < # tt_content.image.20.layout.default.value
# tt_content.image.20.rendering.dl.imageRowStdWrap.dataWrap >
# tt_content.image.20.rendering.dl.oneImageStdWrap.dataWrap >
# tt_content.image.20.rendering.dl.imgTagStdWrap.wrap >
# tt_content.image.20.rendering.dl.editIconsStdWrap.wrap >
# tt_content.image.20.rendering.dl.caption.wrap >
# tt_content.textpic.20.text.10.10.stdWrap.dataWrap >
# tt_content.textpic.20.text.wrap >
# tt_content.stdWrap.prefixComment >
# tt_content.header.20.prefixComment >
# tt_content.default.prefixComment >
# tt_content.text.stdWrap.prefixComment >
# tt_content.text.20.prefixComment >
# tt_content.textpic.20.stdWrap.prefixComment >
# tt_content.table.20.stdWrap.prefixComment >
# tt_content.menu.20.stdWrap.prefixComment >
# tt_content.image.20.stdWrap.prefixComment >
# tt_content.list.20.stdWrap.prefixComment >

tx_cssstyledcontent._CSS_DEFAULT_STYLE >
# tx_srlanguagemenu_pi1._CSS_DEFAULT_STYLE >
tx_seminars_pi1.cssFile > 
tx_newloginbox_pi3._CSS_DEFAULT_STYLE >
tx_newloginbox_pi1._CSS_DEFAULT_STYLE >
tx_wecknowledgebase_pi1._CSS_DEFAULT_STYLE >
tx_cssfilelist._CSS_DEFAULT_STYLE >
tt_content.image.20.stdWrap.replacement {
    10 {
        search = # width="[0-9]*?"#i
        replace = 
        useRegExp = 1
    }
    20 {
        search = # height="[0-9]*?"#i
        replace = 
        useRegExp = 1
    }
}
# tt_content.image.20.stdWrap.parseFunc.nonTypoTagStdWrap.HTMLparser.tags.img.fixAttrib {
#     width.unset = 1
#     height.unset = 1
# }
# tt_content.textpic.20.stdWrap.parseFunc.nonTypoTagStdWrap.HTMLparser.tags.img.fixAttrib {
#     width.unset = 1
#     height.unset = 1
# }
# lib.parseFunc_RTE.nonTypoTagStdWrap.HTMLparser.tags.img.fixAttrib {
#     width.unset = 1
#     height.unset = 1
# }

# page.config.disablePrefixComment = 1


TCEMAIN.table.pages {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}

TCEMAIN.table.tt_content {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}