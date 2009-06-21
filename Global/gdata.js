function sortByName(a, b) {
    if (a.name > b.name) {
	return 1;
    } else if (a.name == b.name) {
	return 0;
    }
    return -1;
}

function getCategories(dictionary) {
    var categories = [];
    var category_definitions = ((dictionary == dimension_definitions)?dimension_category_definitions:metric_category_definitions);
    for (var cat_idx in category_definitions) {
	categories.push(
	    {
		name: category_definitions[cat_idx],
		definitions: getCategory(dictionary, cat_idx)
	    }
	);
    }
    return categories;
}

function getCategory(dictionary, category) {
    var definitions = [];
    for each (var definition in dictionary) {
	if (definition.category == category) {
	    definitions.push(definition);
	}
    }
    definitions.sort(sortByName);
    return definitions;
}

var dimension_category_definitions = {
    1: "D1: Visitor",
    2: "D2: Campaign",
    3: "D3: Content",
    4: "D4: ECommerce",
    5: "D5: Internal Search"
};

var metric_category_definitions = {
    1: "D1: Visitor",
    2: "D2: Campaign",
    3: "D3: Content",
    4: "D4: ECommerce",
    5: "D5: Internal Search",
    6: "D6: Goals"
};

var dimension_definitions = {
    'ga:browser': {
	id: 'ga:browser',
	name: 'Browser',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:browserVersion': {
	id: 'ga:browserVersion',
	name: 'Browser Version',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:city': {
	id: 'ga:city',
	name: 'City',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:connectionSpeed': {
	id: 'ga:connectionSpeed',
	name: 'Connection Speed',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:continent': {
	id: 'ga:continent',
	name: 'Continent',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:countOfVisits': {
	id: 'ga:countOfVisits',
	name: 'Count of Visits',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:country': {
	id: 'ga:country',
	name: 'Country',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:date': {
	id:'ga:date',
	name: 'Date',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:day': {
	id:'ga:day',
	name: 'Day',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:daysSinceLastVisit': {
	id: 'ga:daysSinceLastVisit',
	name: 'Days Since Last Visit',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:flashVersion': {
	id:'ga:flashVersion',
	name: 'Flash Version',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:hostname': {
	id: 'ga:hostname',
	name: 'Hostname',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:hour': {
	id: 'ga:hour',
	name: 'Hour',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:javaEnabled': {
	id: 'ga:javaEnabled',
	name: 'Java Enabled',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:language': {
	id: 'ga:language',
	name: 'Language',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:latitude': {
	id: 'ga:latitude',
	name: 'Latitude',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:longitude': {
	id: 'ga:longitude',
	name: 'Longitude',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:month': {
	id: 'ga:month',
	name: 'Month',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:networkDomain': {
	id: 'ga:networkDomain',
	name: 'Network Domain',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:pageDepth': {
	id: 'ga:pageDepth',
	name: 'Page Depth',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:operatingSystem': {
	id: 'ga:operatingSystem',
	name: 'Operating System',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:operatingSystemVersion': {
	id: 'ga:operatingSystemVersion',
	name: 'Operating System Version',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:region': {
	id:'ga:region',
	name: 'Region',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:screenColors': {
	id:'ga:screenColors',
	name: 'Screen Colors',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:screenResolution': {
	id: 'ga:screenResolution',
	name: 'Screen Resolution',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:subContinent': {
	id: 'ga:subContinent',
	name: 'Sub Continent',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:userDefinedValue': {
	id: 'ga:userDefinedValue',
	name: 'User Defined Value',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:vistorType': {
	id: 'ga:visitorType',
	name: 'Visitor Type',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:week': {
	id: 'ga:week',
	name: 'Week',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:year': {
	id: 'ga:year',
	name: 'Year',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:adContent': {
	id: 'ga:adContent',
	name: 'Ad Content',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:adGroup': {
	id: 'ga:adGroup',
	name: 'Ad Group',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:adSlot': {
	id: 'ga:adSlot',
	name: 'Ad Slot',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:adSlotPosition': {
	id: 'ga:adSlotPosition',
	name: 'Ad Slot Position',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:campaign': {
	id: 'ga:campaign',
	name: 'Campaign',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:keyword': {
	id: 'ga:keyword',
	name: 'Keyword',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:medium': {
	id: 'ga:medium',
	name: 'Medium',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:referralPath': {
	id: 'ga:referralPath',
	name: 'Referal Path',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:source': {
	id: 'ga:source',
	name: 'Source',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:exitPagePath': {
	id:'ga:exitPagePath',
	name: 'Exit Page Path',
	category: 3,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:landingPagePath': {
	id:'ga:landingPagePath',
	name: 'Landing Page Path',
	category: 3,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:pagePath': {
	id:'ga:pagePath',
	name: 'Page Path',
	category: 3,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:pageTitle': {
	id:'ga:pageTitle',
	name: 'Page Title',
	category: 3,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:affiliation': {
	id:'ga:affiliation',
	name: 'Affiliation',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:daysToTransaction': {
	id:'ga:daysToTransaction',
	name: 'Days to Transaction',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:productCategory': {
	id:'ga:productCategory',
	name: 'Product Category',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:productName': {
	id:'ga:productName',
	name: 'Product Name',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:productSku': {
	id:'ga:productSku',
	name: 'Product SKU',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:trasnactionId': {
	id:'ga:transactionId',
	name: 'Transaction ID',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchCategory': {
	id:'ga:searchCategory',
	name: 'Search Category',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchDestinationPage': {
	id:'ga:searchDestinationPage',
	name: 'Search Destination Page',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchKeyword': {
	id:'ga:searchKeyword',
	name: 'Search Keyword',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchKeywordRefinement': {
	id:'ga:searchKeywordRefinement',
	name: 'Search Keyword Refinement',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchStartPage': {
	id:'ga:searchStartPage',
	name: 'Search Start Page',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchUsed': {
	id:'ga:searchUsed',
	name: 'Search Used',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    }
};

var metric_definitions = {
    'ga:bounces': {
	id: 'ga:bounces',
	name: 'Bounces',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:entrances': {
	id: 'ga:entrances',
	name: 'Entrances',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:exits': {
	id: 'ga:exits',
	name: 'Exits',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:newVisits': {
	id: 'ga:newVisits',
	name: 'New Visits',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:pageviews': {
	id: 'ga:pageviews',
	name: 'Pageviews',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:timeOnPage': {
	id:'ga:timeOnPage',
	name: 'Time on Page',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:timeOnSite': {
	id: 'ga:timeOnSite',
	name: 'Time on Site',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:visitors': {
	id: 'ga:visitors',
	name: 'Visitors',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:visits': {
	id: 'ga:visits',
	name: 'Visits',
	category: 1,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:adClicks': {
	id: 'ga:adClicks',
	name: 'Ad Clicks',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:adCost': {
	id: 'ga:adCost',
	name: 'Ad Cost',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:CPC': {
	id: 'ga:CPC',
	name: 'CPC',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:CPM': {
	id: 'ga:CPM',
	name: 'CPM',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:CTR': {
	id: 'ga:CTR',
	name: 'CTR',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:impressions': {
	id: 'ga:impressions',
	name: 'Impressions',
	category: 2,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:uniquePageViews': {
	id: 'ga:uniquePageViews',
	name: 'Unique Page Views',
	category: 3,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:itemRevenue': {
	id: 'ga:itemRevenue',
	name: 'Item Revenue',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:itemQuantity': {
	id: 'ga:itemQuantity',
	name: 'Item Quantity',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:transactionRevenue': {
	id: 'ga:transactionRevenue',
	name: 'Transaction Revenue',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:transactions': {
	id: 'ga:transactions',
	name: 'Transactions',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:transactionShipping': {
	id: 'ga:transactionShipping',
	name: 'Transaction Shipping',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:transactionTax': {
	id: 'ga:transactionTax',
	name: 'Transaction Tax',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:uniquePurchases': {
	id: 'ga:uniquePurchases',
	name: 'Unique Purchases',
	category: 4,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchDepth': {
	id: 'ga:searchDepth',
	name: 'Search Depth',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchDuration': {
	id: 'ga:searchDuration',
	name: 'Search Duration',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchExits': {
	id: 'ga:searchExits',
	name: 'Search Exits',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchRefinements': {
	id: 'ga:searchRefinements',
	name: 'Search Refinements',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchUniques': {
	id: 'ga:searchUniques',
	name: 'Search Uniques',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:searchVisits': {
	id: 'ga:searchVisits',
	name: 'Search Visits',
	category: 5,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal1Completions': {
	id: 'ga:goal1Completions',
	name: 'Goal 1 Completions',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal2Completions': {
	id: 'ga:goal2Completions',
	name: 'Goal 2 Completions',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal3Completions': {
	id: 'ga:goal3Completions',
	name: 'Goal 3 Completions',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal4Completions': {
	id: 'ga:goal4Completions',
	name: 'Goal 4 Completions',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goalCompletionsAll': {
	id: 'ga:goalCompletionsAll',
	name: 'Goal Completions All',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal1Starts': {
	id: 'ga:goal1Starts',
	name: 'Goal 1 Starts',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal2Starts': {
	id: 'ga:goal2Starts',
	name: 'Goal 2 Starts',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal3Starts': {
	id: 'ga:goal3Starts',
	name: 'Goal 3 Starts',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal4Starts': {
	id: 'ga:goal4Starts',
	name: 'Goal 4 Starts',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goalStartsAll': {
	id: 'ga:goalStartsAll',
	name: 'Goal Starts All',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal1Value': {
	id: 'ga:goal1Value',
	name: 'Goal 1 Value',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal2Value': {
	id: 'ga:goal2Value',
	name: 'Goal 2 Value',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal3Value': {
	id: 'ga:goal3Value',
	name: 'Goal 3 Value',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goal4Value': {
	id: 'ga:goal4Value',
	name: 'Goal 4 Value',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    },
    'ga:goalValueAll': {
	id: 'ga:goalValueAll',
	name: 'Goal Value All',
	category: 6,
	exceptions: {
	    metrics: [],
	    dimensions: []
	}
    }
};