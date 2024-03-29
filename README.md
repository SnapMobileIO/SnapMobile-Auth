# SnapMobile-Auth
A npm module for basic authentication

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapmobile-auth": "git+ssh://@github.com/SnapMobileIO/SnapMobile-Auth.git",

To configure, add the following to `app.js`:

    import auth from 'snapmobile-auth';
    
Add 'authApp' as a dependency for the angular app.

To overwrite views, call the function `setOverwriteViews` after the initialization of the angular app:

    auth.setOverwriteViews(['signup']);
    
Pass any views you would like to overwrite (login, signup, password, forgot, and reset) and create the html file in `app/auth/views/`.

# Updating

Make any changes in `/src`.

Once changes are completed, run `gulp dist` to process JavaScript and HTML files and add to `/dist`.
