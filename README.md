# IG_Image_Bookmarklet

This script retrieves the image URL from an Instagram post page accessed from desktop. It then creates a button in the top-left of the user's screen which opens a webpage where that image can be saved.

To use this script, a bookmarklet needs to be created in your browser:

In Chrome:
  1. Right-click in the bookmark bar and select add-page.
  2. In the resulting window, name your bookmarklet "Instagram Image Retriever" or something similar.
  3. Paste the script code in the URL and save your bookmarklet.
  
  More comprehensive instructions on the creation of a bookmarklet can be found here: https://gist.github.com/caseywatts/c0cec1f89ccdb8b469b1
  
Using the bookmarklet:
  1. Find an instagram post from which you'd like to save an image.
  2. CLick the "three dot" menu on the top-right of the post and select "Go to post".
  3. On the following page, access your bookmarklet from your browsers bookmark bar - two clickable buttons on the top left of the page will appear.
  4. Click the "Caption" button first- this will copy the original poster's caption to your clipboard to make citing them easier.
  5. Next, click the "Image" button, your window will change to the image source where you can easily right-click and save.

NOTES:
  Image rights always belong to the original creator, please use other's work responsibly, with permission and attribution.
  This is tested to work when following the above instructions in Chrome and Firefox. I assume no responsibility for uninteded behavior of the bookmarklet.
  This was originally intended to directly download images. Cross-origin image downloads seem to be blocked in many current browsers. The right-click, save option is currently      the fastest workaround to my knowledge.
