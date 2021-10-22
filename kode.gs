function doGet(e) {
  if (!e.parameter.page) {
    var htmlOutput = HtmlService.createTemplateFromFile("index");
    return htmlOutput.evaluate().setTitle("DATA TABLE").setSandboxMode(HtmlService.SandboxMode.IFRAME).addMetaTag("viewport", "width=device-width, initial-scale=1");
  }

  return HtmlService.createTemplateFromFile(e.parameter["page"]).evaluate();
}

/** VAR URL */
function getUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}

/** File*/
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**DataTable */
function getData() {
  var sheetID = "1jQvtZQfN04XhXBim9guklL3RcJNciw0DUCH-OLmKKgg"; // ID
  // var dataRange = "FILE!A2:Z"; // 
  // var range = Sheets.Spreadsheets.Values.get(sheetID, dataRange);
  // var values = range.values;
  // values = values.map(function (row) {
  //   return row.concat([0]);
  // });
  // Logger.log(values);
  // return values;
  var ss = SpreadsheetApp.openById(sheetID)
  var sheet = ss.getSheets()[0]
  var range = sheet.getDataRange()
  var values = range.getDisplayValues()
  Logger.log(values)
  return values
}