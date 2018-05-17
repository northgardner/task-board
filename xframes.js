 // Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
 var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
 output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
