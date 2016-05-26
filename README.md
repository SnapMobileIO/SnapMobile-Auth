# SnapMobile-Admin
A npm module for basic authentication

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapmobile-auth": "git+https://62c8578b25fe85a6cd679783c834bee2ece03e39:x-oauth-basic@github.com/SnapMobileIO/SnapMobile-Auth.git",

To configure, add the following to `app.js`:

    import 'snapmobile-auth';
    
Finally, add 'authApp' as a dependency for the angular app.
