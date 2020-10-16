## Setup Notes

### To run this project you will need to do the following steps

1. Run `npm install` in both of the projects terminal to install the necessary packages.
2. You will also need to delete or change the settings in the upload folder in extensions in the backend project.
3. In the backend run `npm run develop` to start the server.
4. Create your admin user and input your content. The server is located on your localhost:1337.
5. `{`
   `"provider": "cloudinary",`
   `"providerOptions": { "cloud_name": "xxxx",`
   `"api_key": "xxxxxx",`
   `"api_secret": "xxx" }`
   `}`
   Replace the content of cloud_name, api_key and api_secret with your own credentials from Cloudnairy.
6. In your frontend, change settings for contact.js, the settings for form action must be specifically be yours that you recieved from Fromspree.
7. When you are done with the backend you should be able to start your frontend with `gatsby develop`.
8. To see your site, go to your localhost:8000.
9. Happy coding!

