const meraki = require("meraki");
const configuration = meraki.Configuration;
const controller = meraki.ClientsController
configuration.xCiscoMerakiAPIKey = "5c6a0339a3995c8002904419961c826f993edcfe";

meraki.OrganizationsController.getOrganizations().then(res => console.log(res));


   