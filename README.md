# SnapMobile-Admin
A npm module for basic authentication

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapmobile-auth": "git+https://1e8b0a2166919016f0b18bdf4017d107dedb29af:x-oauth-basic@github.com/SnapMobileIO/SnapMobile-Auth.git",

To configure, add the following to `app.js`:

    import 'snapmobile-auth';
    
Finally, add 'authApp' as a dependency for the angular app.

# Updating

Make any changes in `/src`.

Once changes are completed, run `gulp dist` to process JavaScript and HTML files and add to `/dist`.
