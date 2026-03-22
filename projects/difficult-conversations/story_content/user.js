window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  /* Storyline JS Trigger: Jump to slide 14/15/16 based on MasterScore
   Slide: 1.13 Close the Conversation
   Event: Run this trigger when the timeline starts (or when the user clicks a Continue button).

   Assumptions:
   - A Storyline number variable named: MasterScore
   - Slides exist and can be targeted by title (recommended):
       "1.14 ...", "1.15 ...", "1.16 ..." (adjust the names below to match your project)

   IMPORTANT:
   - Storyline's JS can only jump reliably using the built-in player navigation.
   - Replace slideTitle14/15/16 with your exact Slide Titles (display names).
*/

(function () {
  // --- CONFIG: update these to match your exact Slide Titles in Storyline ---
  var slideTitle14 = "1.14"; // e.g., "1.14 Feedback Summary"
  var slideTitle15 = "1.15"; // e.g., "1.15 Coaching"
  var slideTitle16 = "1.16"; // e.g., "1.16 Next Steps"

  // --- Read variable ---
  var scoreRaw = getVar('MasterScore');
  var score = Number(scoreRaw);

  // --- Helpers ---
  function log(msg) {
    try { console.log('[MasterScore Jump]', msg); } catch (e) {}
  }

  function tryJumpByTitle(title) {
    // Use Storyline player API to navigate.
    // This is the most common pattern; some environments expose it as:
    // player.GoToSlide(title)
    // We defensively check several options.
    try {
      if (player && typeof player.GoToSlide === 'function') {
        player.GoToSlide(title);
        return true;
      }
    } catch (e) {}

    // Fallbacks (vary by Storyline wrapper)
    try {
      if (player && player.frame && player.frame.contentWindow && player.frame.contentWindow.player) {
        var p = player.frame.contentWindow.player;
        if (p && typeof p.GoToSlide === 'function') {
          p.GoToSlide(title);
          return true;
        }
      }
    } catch (e2) {}

    return false;
  }

  // --- Decide destination ---
  // Adjust these thresholds/logic to match your design.
  // Example mapping:
  //   score >= 80  -> slide 16
  //   score >= 50  -> slide 15
  //   otherwise    -> slide 14

  var destinationTitle;

  if (!isFinite(score)) {
    log('MasterScore is not a number (value: ' + scoreRaw + '). Falling back to slide 14.');
    destinationTitle = slideTitle14;
  } else if (score >= 80) {
    destinationTitle = slideTitle16;
  } else if (score >= 50) {
    destinationTitle = slideTitle15;
  } else {
    destinationTitle = slideTitle14;
  }

  log('MasterScore=' + score + ' -> Jump to "' + destinationTitle + '"');

  // --- Jump ---
  var jumped = tryJumpByTitle(destinationTitle);
  if (!jumped) {
    // Last-resort fallback: attempt to advance (won't select a specific slide)
    log('GoToSlide not available. Falling back to Next().');
    try {
      if (player && typeof player.Next === 'function') {
        player.Next();
      }
    } catch (e3) {}
  }
})();
}

};
