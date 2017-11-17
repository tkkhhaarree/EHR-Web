function createcomp() {
	var user=localStorage.getItem("username");
	var pass = 	localStorage.getItem("password");
	var org = localStorage.getItem("organization");
	var xhttp1 = new XMLHttpRequest();
	xhttp1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			var t = obj.token.replace(/[{}]/g, "");
			var xhttp2 = new XMLHttpRequest();
			xhttp2.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200){
					console.log("create comp resp: "+this.responseText);
					window.open("ehrinfo.html","_self");
				}
			};

			var comp = {
    "versions" : {
        "@xmlns:xsi" : "http://www.w3.org/2001/XMLSchema-instance",
        "@xmlns" : "http://schemas.openehr.org/v1",
        "version" : {
            "@xsi:type" : "ORIGINAL_VERSION",
            "contribution" : {
                "id" : {
                    "@xsi:type" : "HIER_OBJECT_ID",
                    "value" : "f65421a5-6698-4603-976e-aa3dc5413534"
                },
                "namespace" : "EHR::COMMON",
                "type" : "CONTRIBUTION"
            },
            "commit_audit" : {
                "system_id" : "CABOLABS_EHR",
                "committer" : {
                    "@xsi:type" : "PARTY_IDENTIFIED",
                    "external_ref" : {
                        "id" : {
                            "@xsi:type" : "HIER_OBJECT_ID",
                            "value" : "cc193f71-f5fe-438a-87f9-81e74302eede"
                        },
                        "namespace" : "DEMOGRAPHIC",
                        "type" : "PERSON"
                    },
                    "name" : "Dr. House"
                },
                "time_committed" : {
                    "value" : "20161005T022250,000-0300"
                },
                "change_type" : {
                    "value" : "creation",
                    "defining_code" : {
                        "terminology_id" : {
                            "value" : "openehr"
                        },
                        "code_string" : 249
                    }
                }
            },
            "uid" : {
                "value" : "0c708601-558a-4d34-9694-fcd764713f13::EMR::1"
            },
            "data" : {
                "@archetype_node_id" : "openEHR-EHR-COMPOSITION.signos.v1",
                "@xsi:type" : "COMPOSITION",
                "name" : {
                    "value" : "Signos vitales"
                },
                "uid" : {
                    "@xsi:type" : "HIER_OBJECT_ID",
                    "value" : "2442ad59-f5e9-4a73-9ee5-7488015074d4"
                },
                "archetype_details" : {
                    "archetype_id" : {
                        "value" : "openEHR-EHR-COMPOSITION.signos.v1"
                    },
                    "template_id" : {
                        "value" : "Signos"
                    },
                    "rm_version" : "1.0.2"
                },
                "language" : {
                    "terminology_id" : {
                        "value" : "ISO_639-1"
                    },
                    "code_string" : "es"
                },
                "territory" : {
                    "terminology_id" : {
                        "value" : "ISO_3166-1"
                    },
                    "code_string" : "UY"
                },
                "category" : {
                    "value" : "event",
                    "defining_code" : {
                        "terminology_id" : {
                            "value" : "openehr"
                        },
                        "code_string" : 433
                    }
                },
                "composer" : {
                    "@xsi:type" : "PARTY_IDENTIFIED",
                    "external_ref" : {
                        "id" : {
                            "@xsi:type" : "HIER_OBJECT_ID",
                            "value" : "cc193f71-f5fe-438a-87f9-81ecb302eede"
                        },
                        "namespace" : "DEMOGRAPHIC",
                        "type" : "PERSON"
                    },
                    "name" : "Dr. House"
                },
                "context" : {
                    "start_time" : {
                        "value" : "20161005T022250,000-0300"
                    },
                    "setting" : {
                        "value" : "Hospital Montevideo",
                        "defining_code" : {
                            "terminology_id" : {
                                "value" : "openehr"
                            },
                            "code_string" : 229
                        }
                    }
                },
                "content" : [ {
                    "@archetype_node_id" : "openEHR-EHR-OBSERVATION.blood_pressure.v1",
                    "@xsi:type" : "OBSERVATION",
                    "name" : {
                        "value" : "Blood Pressure"
                    },
                    "language" : {
                        "terminology_id" : {
                            "value" : "ISO_639-1"
                        },
                        "code_string" : "es"
                    },
                    "encoding" : {
                        "terminology_id" : {
                            "value" : "Unicode"
                        },
                        "code_string" : "UTF-8"
                    },
                    "subject" : {
                        "@xsi:type" : "PARTY_SELF"
                    },
                    "protocol" : {
                        "@archetype_node_id" : "at0011",
                        "@xsi:type" : "ITEM_TREE",
                        "name" : {
                            "value" : "Tree"
                        }
                    },
                    "data" : {
                        "@archetype_node_id" : "at0001",
                        "@xsi:type" : "HISTORY",
                        "name" : {
                            "value" : "history"
                        },
                        "origin" : {
                            "@xsi:type" : "DV_DATE_TIME",
                            "value" : "20161005T022250,000-0300"
                        },
                        "events" : {
                            "@archetype_node_id" : "at0006",
                            "@xsi:type" : "POINT_EVENT",
                            "name" : {
                                "value" : "any event"
                            },
                            "time" : {
                                "@xsi:type" : "DV_DATE_TIME",
                                "value" : "20161005T022250,000-0300"
                            },
                            "data" : {
                                "@archetype_node_id" : "at0003",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "blood pressure"
                                },
                                "items" : [ {
                                    "@archetype_node_id" : "at0005",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "value" : "Diastolic"
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 76,
                                        "units" : "mm[Hg]"
                                    }
                                }, {
                                    "@archetype_node_id" : "at0004",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "value" : "Systolic"
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 126,
                                        "units" : "mm[Hg]"
                                    }
                                } ]
                            },
                            "state" : {
                                "@archetype_node_id" : "at0007",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "state structure"
                                }
                            }
                        }
                    }
                }, {
                    "@archetype_node_id" : "openEHR-EHR-OBSERVATION.body_temperature.v1",
                    "@xsi:type" : "OBSERVATION",
                    "name" : {
                        "value" : "Body temperature"
                    },
                    "language" : {
                        "terminology_id" : {
                            "value" : "ISO_639-1"
                        },
                        "code_string" : "es"
                    },
                    "encoding" : {
                        "terminology_id" : {
                            "value" : "Unicode"
                        },
                        "code_string" : "UTF-8"
                    },
                    "subject" : {
                        "@xsi:type" : "PARTY_SELF"
                    },
                    "protocol" : {
                        "@archetype_node_id" : "at0020",
                        "@xsi:type" : "ITEM_TREE",
                        "name" : {
                            "value" : "Protocol"
                        }
                    },
                    "data" : {
                        "@archetype_node_id" : "at0002",
                        "@xsi:type" : "HISTORY",
                        "name" : {
                            "value" : "History"
                        },
                        "origin" : {
                            "@xsi:type" : "DV_DATE_TIME",
                            "value" : "20161005T022250,000-0300"
                        },
                        "events" : {
                            "@archetype_node_id" : "at0003",
                            "@xsi:type" : "POINT_EVENT",
                            "name" : {
                                "value" : "Any event"
                            },
                            "time" : {
                                "@xsi:type" : "DV_DATE_TIME",
                                "value" : "20161005T022250,000-0300"
                            },
                            "data" : {
                                "@archetype_node_id" : "at0001",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "Tree"
                                },
                                "items" : {
                                    "@archetype_node_id" : "at0004",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "value" : "Temperature"
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 36,
                                        "units" : "C"
                                    }
                                }
                            },
                            "state" : {
                                "@archetype_node_id" : "at0029",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "State"
                                }
                            }
                        }
                    }
                }, {
                    "@archetype_node_id" : "openEHR-EHR-OBSERVATION.pulse.v1",
                    "@xsi:type" : "OBSERVATION",
                    "name" : {
                        "value" : "Pulso"
                    },
                    "language" : {
                        "terminology_id" : {
                            "value" : "ISO_639-1"
                        },
                        "code_string" : "es"
                    },
                    "encoding" : {
                        "terminology_id" : {
                            "value" : "Unicode"
                        },
                        "code_string" : "UTF-8"
                    },
                    "subject" : {
                        "@xsi:type" : "PARTY_SELF"
                    },
                    "protocol" : {
                        "@archetype_node_id" : "at0010",
                        "@xsi:type" : "ITEM_TREE",
                        "name" : {
                            "value" : "*List(en)"
                        }
                    },
                    "data" : {
                        "@archetype_node_id" : "at0002",
                        "@xsi:type" : "HISTORY",
                        "name" : {
                            "value" : "*history(en)"
                        },
                        "origin" : {
                            "@xsi:type" : "DV_DATE_TIME",
                            "value" : "20161005T022250,000-0300"
                        },
                        "events" : {
                            "@archetype_node_id" : "at0003",
                            "@xsi:type" : "POINT_EVENT",
                            "name" : {
                                "value" : "*Any event(en)"
                            },
                            "time" : {
                                "@xsi:type" : "DV_DATE_TIME",
                                "value" : "20161005T022250,000-0300"
                            },
                            "data" : {
                                "@archetype_node_id" : "at0001",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "*structure(en)"
                                },
                                "items" : {
                                    "@archetype_node_id" : "at0004",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "@xsi:type" : "DV_CODED_TEXT",
                                        "value" : "Frecuencia cardiaca",
                                        "defining_code" : {
                                            "terminology_id" : {
                                                "value" : "local"
                                            },
                                            "code_string" : "at1027"
                                        }
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 82,
                                        "units" : "/min"
                                    }
                                }
                            },
                            "state" : {
                                "@archetype_node_id" : "at0012",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "*List(en)"
                                }
                            }
                        }
                    }
                }, {
                    "@archetype_node_id" : "openEHR-EHR-OBSERVATION.respiration.v1",
                    "@xsi:type" : "OBSERVATION",
                    "name" : {
                        "value" : "Respirations"
                    },
                    "language" : {
                        "terminology_id" : {
                            "value" : "ISO_639-1"
                        },
                        "code_string" : "es"
                    },
                    "encoding" : {
                        "terminology_id" : {
                            "value" : "Unicode"
                        },
                        "code_string" : "UTF-8"
                    },
                    "subject" : {
                        "@xsi:type" : "PARTY_SELF"
                    },
                    "data" : {
                        "@archetype_node_id" : "at0001",
                        "@xsi:type" : "HISTORY",
                        "name" : {
                            "value" : "history"
                        },
                        "origin" : {
                            "@xsi:type" : "DV_DATE_TIME",
                            "value" : "20161005T022250,000-0300"
                        },
                        "events" : {
                            "@archetype_node_id" : "at0002",
                            "@xsi:type" : "POINT_EVENT",
                            "name" : {
                                "value" : "Any event"
                            },
                            "time" : {
                                "@xsi:type" : "DV_DATE_TIME",
                                "value" : "20161005T022250,000-0300"
                            },
                            "data" : {
                                "@archetype_node_id" : "at0003",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "List"
                                },
                                "items" : {
                                    "@archetype_node_id" : "at0004",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "value" : "Rate"
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 26,
                                        "units" : "/min"
                                    }
                                }
                            },
                            "state" : {
                                "@archetype_node_id" : "at0022",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "List"
                                }
                            }
                        }
                    }
                }, {
                    "@archetype_node_id" : "openEHR-EHR-OBSERVATION.body_weight.v1",
                    "@xsi:type" : "OBSERVATION",
                    "name" : {
                        "value" : "Peso corporal"
                    },
                    "language" : {
                        "terminology_id" : {
                            "value" : "ISO_639-1"
                        },
                        "code_string" : "es"
                    },
                    "encoding" : {
                        "terminology_id" : {
                            "value" : "Unicode"
                        },
                        "code_string" : "UTF-8"
                    },
                    "subject" : {
                        "@xsi:type" : "PARTY_SELF"
                    },
                    "protocol" : {
                        "@archetype_node_id" : "at0015",
                        "@xsi:type" : "ITEM_TREE",
                        "name" : {
                            "value" : "*protocol structure(en)"
                        }
                    },
                    "data" : {
                        "@archetype_node_id" : "at0002",
                        "@xsi:type" : "HISTORY",
                        "name" : {
                            "value" : "*history(en)"
                        },
                        "origin" : {
                            "@xsi:type" : "DV_DATE_TIME",
                            "value" : "20161005T022250,000-0300"
                        },
                        "events" : {
                            "@archetype_node_id" : "at0003",
                            "@xsi:type" : "POINT_EVENT",
                            "name" : {
                                "value" : "Cualquier evento."
                            },
                            "time" : {
                                "@xsi:type" : "DV_DATE_TIME",
                                "value" : "20161005T022250,000-0300"
                            },
                            "data" : {
                                "@archetype_node_id" : "at0001",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "*Simple(en)"
                                },
                                "items" : {
                                    "@archetype_node_id" : "at0004",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "value" : "Peso"
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 81,
                                        "units" : "kg"
                                    }
                                }
                            },
                            "state" : {
                                "@archetype_node_id" : "at0008",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "*state structure(en)"
                                }
                            }
                        }
                    }
                }, {
                    "@archetype_node_id" : "openEHR-EHR-OBSERVATION.body_height.v1",
                    "@xsi:type" : "OBSERVATION",
                    "name" : {
                        "value" : "Height"
                    },
                    "language" : {
                        "terminology_id" : {
                            "value" : "ISO_639-4"
                        },
                        "code_string" : "es"
                    },
                    "encoding" : {
                        "terminology_id" : {
                            "value" : "Unicode"
                        },
                        "code_string" : "UTF-8"
                    },
                    "subject" : {
                        "@xsi:type" : "PARTY_SELF"
                    },
                    "protocol" : {
                        "@archetype_node_id" : "at0015",
                        "@xsi:type" : "ITEM_TREE",
                        "name" : {
                            "value" : "*protocol structure(en)"
                        }
                    },
                    "data" : {
                        "@archetype_node_id" : "at0002",
                        "@xsi:type" : "HISTORY",
                        "name" : {
                            "value" : "*history(en)"
                        },
                        "origin" : {
                            "@xsi:type" : "DV_DATE_TIME",
                            "value" : "20161005T022250,000-0300"
                        },
                        "events" : {
                            "@archetype_node_id" : "at0003",
                            "@xsi:type" : "POINT_EVENT",
                            "name" : {
                                "value" : "Cualquier evento."
                            },
                            "time" : {
                                "@xsi:type" : "DV_DATE_TIME",
                                "value" : "20161005T022250,000-0300"
                            },
                            "data" : {
                                "@archetype_node_id" : "at0001",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "*Simple(en)"
                                },
                                "items" : {
                                    "@archetype_node_id" : "at0004",
                                    "@xsi:type" : "ELEMENT",
                                    "name" : {
                                        "value" : "Height"
                                    },
                                    "value" : {
                                        "@xsi:type" : "DV_QUANTITY",
                                        "magnitude" : 81,
                                        "units" : "cm"
                                    }
                                }
                            },
                            "state" : {
                                "@archetype_node_id" : "at0008",
                                "@xsi:type" : "ITEM_TREE",
                                "name" : {
                                    "value" : "*state structure(en)"
                                }
                            }
                        }
                    }
                } ]
},
"lifecycle_state" : {
    "value" : "completed",
    "defining_code" : {
        "terminology_id" : {
            "value" : "openehr"
        },
        "code_string" : 532
    }
}
}
}
}
			
			var d = new Date(); 
			var ehruid = localStorage.getItem("ehruid").toString();
			console.log(comp.versions.version.contribution.id.value);
			comp.versions.version.contribution.id.value = Math.floor((Math.random() * 100000) + 1).toString();
			comp.versions.version.commit_audit.time_committed.value = "20171116T224009";
			comp.versions.version.uid.value = Math.floor((Math.random() * 1000) + 1).toString()+"::EMR_APP::1";
			comp.versions.version.data.uid.value = document.getElementById("compuid").value.toString();
			comp.versions.version.data.content[0].data.events.data.items[0].value.magnitude = parseInt(document.getElementById("diastolic").value);
			comp.versions.version.data.content[0].data.events.data.items[1].value.magnitude =  parseInt(document.getElementById("systolic").value);
			comp.versions.version.data.content[1].data.events.data.items.value.magnitude =  parseInt(document.getElementById("temp").value);
			comp.versions.version.data.content[2].data.events.data.items.value.magnitude =  parseInt(document.getElementById("pulse").value);
			comp.versions.version.data.content[3].data.events.data.items.value.magnitude =  parseInt(document.getElementById("resp").value);
			comp.versions.version.data.content[4].data.events.data.items.value.magnitude =  parseInt(document.getElementById("weight").value);
			comp.versions.version.data.content[5].data.events.data.items.value.magnitude =  parseInt(document.getElementById("height").value);



			xhttp2.open("POST", "http://localhost:8090/ehr/api/v1/ehrs/"+ehruid+"/compositions?auditCommitter=admin&auditSystemId=DELL", true);
			xhttp2.setRequestHeader("Authorization", "Bearer "+t);
			xhttp2.setRequestHeader("Content-Type", "application/json");
			xhttp2.send(JSON.stringify(comp));
			

		}

	};
	xhttp1.open("POST", "http://localhost:8090/ehr/api/v1/login", true);
	xhttp1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp1.send("username="+user+"&password="+pass+"&organization="+org);
}