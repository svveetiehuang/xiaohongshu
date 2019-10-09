import { createGlobalStyle } from 'styled-components'

export const GlobalStaticStyle = createGlobalStyle`

  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1569684847462'); /* IE9 */
    src: url('./iconfont.eot?t=1569684847462#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARYAAsAAAAACLQAAAQKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEdIQmATYCJAMQCwoABCAFhG0HRBuUBxFVnNXIfiQ4xkrPp26XklRTJOnVB3E++G75khSutCfiOlNuc5iIy5c4m8sxtkWYCPVLYqfevu2n/zu9NM84j9MohZAgHA0QQBD2j8O9Ns8Dm8+yXObYGnUBRhMooDG2LZAJUl8Y/yKeaQYyE37vBgJAgCXcQeIT0/PBg4M9iAAg7S1NNeALSnAdOAJeIm2YyYFMgwQ8nUgvAZga/T35CF/CAxQSBntkdmNCPaLfaL6dy+QqOcoDBFjz6QGI8wAGwB0AB5DmRmMtWBJ0B4Ogx3MIBMA731Dgjeab0LdzVSpkn0XI4788gIKAAUQKW6iOWH8BuzGWRwEKvAmlAAHezlWCMTTXnwcgArgGEAZY8/UppGA2WjKZhqm+urlgM3Rb9C1BEbhHEcQ+IL13ReVtl85ODVnvcsj5EOS3K+W3nNfZr/K/e7fIQD4bbcq5vXMUsxKJyI+qVh4G5IcURwjpPdpBmVoQ8tyI5h9rxurO34Zm7920wjlzDQouKlOK5s7WLxmTpzxcI9y5U8hW4Iluy7u3829tchKV54/fNk8uciu/lgm7rpnTxdcDyqjG3rtWRQuXbDggCIaKNYZzlpjNNbJa6Dzilj37jG/l6wdMex65OKom2uTq1qhsG9P0mWxwn+5phfZNFjpGdTZ24V+nL+3hNUMi42unhFtapH7dsM6eIiW1rUjPlCZQjGuTPdJ9rHtY99DvxaHwDL3LupfONBvbGH830fHRMflurNNfGG7qZ+o2qmi3MRmVFSG9W7uZxsmGj39zJbk7VifWb/XEKTXoTqBzatHgJogG3gl6Wz2WFrSCq2tgHCkpIXGiSws/Mo5EF7imLI3p2Rin0WFSp7g5zPbSKs2Y6qD/WrENOfFka9RFw+4GXlRr7C64cLH7WlzgpsB/fv0mW+uNr1ZPmvdpmrZp2tst81P0KhNUhx2tAXXoht2WlbBoQCVnM1loFL7NdrOKv0Uv7Ouou1WlFf6NF1+Xivu7l4AJ7Sr50ES975ZFZv0JWMQizuDYKm4a12OaLk6Jb3kYBQgEgAqsun5ziA3I6QDBM8iAUmMBDM8eyWHdQULkD1K8KBC42c8X6WFDZDIArl4AhLY3UJqOAqPtg+SwX5Aw9Acp7RgICluuKHKsZbFmVIIp6CcUhlrramQRZx4x62rFeU6EvyL7wgNxEJUje2yR5xjjb1kiYsEyNbCD/bCuCRxTiUaCXMStwtA23Skw1PQW4jCkCJQC2hMoGKRlg/JiUfn9Ecp0agp3FNSprxDziuZBLBARkHthSyq4l/beTSYhhOX6WYw0wI7pUe0ECXDN3UrIEIF8hN9ZCbGUpQqD9cXNK9wAILBvwUUJIxyRQHLnapyqNmUq0pnkXaN953o9AAA=') format('woff2'),
    url('./iconfont.woff?t=1569684847462') format('woff'),
    url('./iconfont.ttf?t=1569684847462') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1569684847462#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-apple:before {
    content: "\e63a";
  }

  .icon-android:before {
    content: "\e60e";
  }

  .icon-thumbsup:before {
    content: "\e797";
  }
`
