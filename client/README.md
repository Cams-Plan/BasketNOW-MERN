## Client

## Pre-requisites/Checks

- To use custom fonts there must be a react-native.config.js file with the following:

    ``` 
        module.exports = {
            project: {
                ios: {},
                android: {}, // grouped into "project"
            },
            assets: ["./src/assets/fonts/"], // stays the same
        };

    ```

- To use the navigation, reanimation must be sourced in the babel.config.js file as follows

    ```
    ...plugins: ['react-native-reanimated/plugin'],
    ```
