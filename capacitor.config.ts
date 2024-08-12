import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.wcaleniewolny.test.ionic.vue',
  appName: 'capgoTestVueApp',
  webDir: 'dist',
  plugins: {
    extConfig: {},
    CapacitorUpdater: {
      autoUpdate: true,
      signKey: 'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA99cHLy9J6iPQ8Z4j4jXgefbQePWO8bWsmOATNttHl3Pcqr+dozF8u04zXrtAwSEm3EhIvVO7WL/YcyJlOcnkbbgWQKznKe3vXo8pG2BsXEa+EqurKaIEP8Jr2AC97UJ/GgOl/JfFFY4FHMMc0D54AtrQvzq+0nhMw51+h8cniT45rgW3w5Ed717Y5NsOMFtHGEmZINnZh21zCFnTNhmLMeVmjTqOi50sjObN4rGIbwaKuDYt9n4psJZpW6y75jwxe6KMIbqS6b8an3at31MwFUYEftPXnBay8BHPRJ8ux6uPAYUqY7mOuV9QzyIDSBnQ+o/ntEzf1eumhbYed+JYJpgLiSmikkDMcVvLutA7aMmEz4p36HI8Xj6ptlFjHRahEkiAVk445pi2BeA5LJZOSzO51qrL7rqbWgf8RrrZJfwWF/5BbzePnVYq0CWnlQSYbToopaah8dSsIiuf/v4yWkx/6fILVJlQz2+BwmmznHs3JoGw1y5zVZjQKd87BSTk994gpKMRuYdEnANUpaQFeJm/BYOcFJpB3XWTadSEQIcbbJA/DObCdBG8pcPByB7MYlFvbvJ1LXmMf+zsajeMMDO3NDgJ/p0vESQLBa9Xkt8+L8x2m0B9ww0ByFOkGv/Zj06WxTLXT9bhQ24z2YQ6n/5KpdI9mIwr0ZbR3eEkwBcCAwEAAQ=='
    }
  }
};

export default config;
