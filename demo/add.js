const { json } = require("body-parser");

let x=1;
let y=9;
console.log(x+y);

str="{​\"blueprint_info\":{​\"name\":\"os_test\",\"version\":\"3.1.0\",\"description\":\"testing\",\"category\":\"app stack\",\"email\":\"madhu.madhanan@wipro.com\",\"type\":\"Configure\"}​,\"riglet_info\":{​\"name\":\"stark\",\"auth_users\":\"dmluser\"}​,\"precommit\":{​\"commit_rule\":{​\"msg_pattern\":\"sdfg\",\"error_msg\":\"sdf\"}​,\"commit_scripts\":[\"testScripts.sh\"]}​,\"environment\":{​\"project\":{​\"name\":\"batman\",\"create\":true}​,\"project_resource_quota\":{​\"backup_Storage_in_Gi\":\"1Gi\",\"log_file_Storage_in_Gi\":\"1Gi\",\"persistent_Storage_in_Gi\":\"1Gi\",\"requests_Cpu\":\"1\",\"requests_Memory_in_Gi\":\"1Gi\",\"services_Node_ports\":\"2\"}​,\"project_email\":{​\"project_requester_email\":\"bizeet.dey@wipro.com\"}​,\"project_cost_center_details\":{​\"cost_center\":\"wld098456\"}​,\"tool\":{​\"name\":\"openshift_connector\"}​}​,\"quick_links\":[{​\"tag\":\"openshift\",\"url\":\"google.com\"}​]}​"
json1=JSON.parse(str)
console.log(json1);
console.log(json1.blueprint_info.name);
