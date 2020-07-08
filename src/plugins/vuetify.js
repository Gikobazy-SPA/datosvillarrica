import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.teal.base,
                secondary: colors.lightGreen.base,
                accent: colors.cyan.base,
                error: colors.pink.base,
                warning: colors.orange.base,
                info: colors.blueGrey.base,
                success: colors.green.base
            }
        }
    }
});
