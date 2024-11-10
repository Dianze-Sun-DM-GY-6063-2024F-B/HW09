# HW09 Template

For 2024F 6063B [HW09](https://6063b.github.io/homework/09/#/programming)

HW09A
Checking Each Pixel Individually: In the draw function, each time the screen refreshes, I go through every pixel in the image and check its color. Each pixel is essentially a combination of three color values (red, green, and blue). By looking at these values, I can determine the approximate color of that pixel.

Red Detection: First, I check if a pixel is red. My criteria are that the red value r is at least 1.3 times greater than both the green g and blue b values, and that the red value is above 128. This ensures that I select pixels that are distinctly red rather than those that just have a hint of red. If these conditions are met, I change the pixel’s color to purple by adjusting the red, green, and blue values: r=89, g=55 + s/2 (where s is the slider value, allowing me to make the purple lighter or darker), and b=191. With this setup, as I move the slider, the red pixels transform into purples of varying intensity.

Green Detection: Next, I check if a pixel is green. I want the green pixels to be distinctly “green,” so I set strict criteria: the green value g must be at least 1.8 times the red r value, and the blue value should be low, with the green value above 50. This helps ensure I’m selecting genuinely green areas. If a pixel meets these conditions, I change its color to an orange hue: r=255, g=178, b=77 + s. This way, the slider can control the brightness of the orange.

Yellow Detection: Then, I check for yellow pixels. The criteria for yellow are that both the red r and green g values should be greater than the blue value, and both red and green should be above 128, creating a warm yellow tone. If these conditions are met, I change the pixel color to deep red: r=222, g=0 + s (with the green value adjusted by the slider), and b=0. This allows the yellow areas to adjust in intensity based on the slider.

Overall Effect: Once these color replacements are complete, all the red, green, and yellow-ish pixels adjust to new colors with varying shades controlled by the slider, adding depth and visual interest to the image.

HW09B

Setting up the Camera Feed: I started by capturing video from the webcam (mCamera) and resizing it to half the canvas dimensions. This reduces memory usage while still allowing enough detail for the effect. The camera view is hidden, as only the pixel data is needed.

Creating a Grid: In the draw function, a grid with cells of 50x50 pixels is created over the entire canvas.

Mapping Camera Pixels to Canvas: For each grid cell, I mapped its position on the canvas to the corresponding position in the camera feed, allowing me to pull pixel data from the camera that aligns with each cell location.

Brightness Calculation: I used the red, green, and blue values of each mapped pixel to calculate an average brightness value. This value serves as a measure of how light or dark the area is.

Circle Pattern Based on Brightness: The brightness value determines the number and size of circles drawn within each cell. Higher brightness results in more and larger circles, while lower brightness creates fewer, smaller circles.

Styling: The circles are given a yellow-green stroke color to stand out against the black background.