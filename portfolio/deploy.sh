#!/bin/bash

npm run build


echo "Deploying to GitHub Pages..."
git add -A
git commit -m "Deploy to github pages"
git push origin main
echo "Deployment complete!"


scp -r dist/* root@152.42.170.93:/var/www/dennis
echo "Files copied to server!"
