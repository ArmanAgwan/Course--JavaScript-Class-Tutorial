class Setting {
    constructor() {
        if(Setting.instance instanceof Setting) {
            return Setting.instance;
        }

        this.settingsObject = {
            'background': '#ff0000',
            'version': Math.floor(Math.random() * 4000)
        };

        Object.freeze(this.settingsObject);
        Object.freeze(this);
        Setting.instance = this;
    }

    get(key) {
        return this.settingsObject[key];
    }
}