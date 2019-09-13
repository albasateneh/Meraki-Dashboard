const meraki = require("meraki");
const configuration = meraki.Configuration;
configuration.xCiscoMerakiAPIKey = "5c6a0339a3995c8002904419961c826f993edcfe";

//meraki.OrganizationsController.getOrganizations().then(res => console.log(res));





// Get Network Traffic ********NEED TO ENABLE HOSTNAME VISIBILITY********

// let params = [];
// let networkId = 'N_636696397319514887';
// params['networkId'] = networkId;

// let timespan = '7200';
// params['timespan'] = timespan;

// meraki.NetworksController.getNetworkTraffic(params)
// .then(res => console.log(res))
// .catch(e => console.log(e));





// All Network Locations

// const params = {
//     organizationId: "361444" // Meraki Launchpad Demo
//   };
//   meraki.NetworksController.getOrganizationNetworks(params)
//     .then(res => console.log(res))
//     .catch(e => console.log(e));





// Network Devices

// let params = [];
// let networkId = "N_636696397319514887"; // Sandbox Campus-SFO
// params["networkId"] = networkId;

// meraki.DevicesController.getNetworkDevices(networkId) 
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });



  

