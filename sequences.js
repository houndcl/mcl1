// Dimensions of sunburst.
var width = 750;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 150, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
//"agiotensin antagonist":"#FF0000FF", "AGT":"#FF1000FF", "apoptosis inducer":"#FF2000FF", "autophay inducer":"#FF2F00FF", "PIKFYVE":"#FF3F00FF", "BCR signaling":"#FF4F00FF", "BTK":"#FF5F00FF", "SYK":"#FF6E00FF", "TNF":"#FF7E00FF", "DNA damage inducer":"#FF8E00FF", "CHEK1":"#FF9E00FF", "CHEK2":"#FFAE00FF", "epigenetic modulator":"#FFBD00FF", "BRD4":"#FFCD00FF", "HDAC1":"#FFDD00FF", "ER stress inducer":"#FFED00FF", "BIRC5":"#FFFC00FF", "EEF1A1":"#F2FF00FF", "HSP90AB1":"#E2FF00FF", "PSMD1":"#D2FF00FF", "SERCA":"#C3FF00FF", "VCP":"#B3FF00FF", "glycolysis inhibitor":"#A3FF00FF", "HK1":"#93FF00FF", "Jak-Stat signaling":"#83FF00FF", "IL12":"#74FF00FF", "JAK1":"#64FF00FF", "JAK2":"#54FF00FF", "STAT3":"#44FF00FF", "TYK2":"#35FF00FF", "Met signaling inhibitor":"#25FF00FF", "MET":"#15FF00FF", "mitotic blocker":"#05FF00FF", "G1 phase":"#00FF0BFF", "antimetabolite":"#00FF1AFF", "DNA replication":"#00FF2AFF", "G2-M phase":"#00FF3AFF", "CDK1":"#00FF4AFF", "M phase":"#00FF59FF", "AURKA":"#00FF69FF", "cytokenesis":"#00FF79FF", "KIF11":"#00FF89FF", "MPS1":"#00FF98FF", "S-G2 phase":"#00FFA8FF", "NF-kB signaling inhibitor":"#00FFB8FF", "NFKB1":"#00FFC8FF", "nuclear receptor":"#00FFD8FF", "RARB":"#00FFE7FF", "RORB":"#00FFF7FF", "RXR":"#00F7FFFF", "RXRA":"#00E7FFFF", "other":"#00D8FFFF", "other kinase":"#00C8FFFF", "ALK5":"#00B8FFFF", "Bcr-Abl":"#00A8FFFF", "CSNK2A1":"#0098FFFF", "PRKCA":"#0089FFFF", "ROCK1":"#0079FFFF", "oxidative stress inducer":"#0069FFFF", "CDPK1":"#0059FFFF", "glutathione blocker":"#004AFFFF", "Xc system":"#003AFFFF", "mitochondria":"#002AFFFF", "MTC blocker":"#001AFFFF", "complex III":"#000BFFFF", "NAMPT":"#0500FFFF", "thio-stress":"#1500FFFF", "PI3K-mTOR signaling inhibitor":"#2500FFFF", "AKT1":"#3500FFFF", "GSK3B":"#4400FFFF", "MTOR":"#5400FFFF", "PI3K":"#6400FFFF", "protein synthesis blocker":"#7400FFFF", "PRKDC":"#8300FFFF", "RNA synthesis":"#9300FFFF", "translation initiation ":"#A300FFFF", "XPO1":"#B300FFFF", "Ras signaling":"#C300FFFF", "COX10":"#D200FFFF", "MAP2K1":"#E200FFFF", "MITF":"#F200FFFF", "RTK signaling":"#FF00FCFF", "ERBB2":"#FF00EDFF", "FGFR":"#FF00DDFF", "FLT1":"#FF00CDFF", "IGFR1":"#FF00BDFF", "KDR":"#FF00AEFF", "KIT":"#FF009EFF", "PDGFRB":"#FF008EFF", "survival blocker":"#FF007EFF", "Bcl family":"#FF006EFF", "BCL2":"#FF005FFF", "IAP family":"#FF004FFF", "XIAP":"#FF003FFF", "TCR signaling":"#FF002FFF", "ITK":"#FF0020FF", "LCK":"#FF0010FF"
//"agiotensin antagonist":"#00A600FF", "AGT":"#04A700FF", "apoptosis inducer":"#07A800FF", "autophay inducer":"#0BAA00FF", "PIKFYVE":"#0FAB00FF", "BCR signaling":"#12AD00FF", "BTK":"#16AE00FF", "SYK":"#1AAF00FF", "TNF":"#1EB100FF", "DNA damage inducer":"#22B200FF", "CHEK1":"#26B300FF", "CHEK2":"#2AB500FF", "epigenetic modulator":"#2EB600FF", "BRD4":"#33B700FF", "HDAC1":"#37B900FF", "ER stress inducer":"#3BBA00FF", "BIRC5":"#40BB00FF", "EEF1A1":"#44BD00FF", "HSP90AB1":"#49BE00FF", "PSMD1":"#4DC000FF", "SERCA":"#52C100FF", "VCP":"#57C200FF", "glycolysis inhibitor":"#5CC400FF", "HK1":"#60C500FF", "Jak-Stat signaling":"#65C600FF", "IL12":"#6AC800FF", "JAK1":"#6FC900FF", "JAK2":"#74CA00FF", "STAT3":"#79CC00FF", "TYK2":"#7FCD00FF", "Met signaling inhibitor":"#84CE00FF", "MET":"#89D000FF", "mitotic blocker":"#8ED100FF", "G1 phase":"#94D300FF", "antimetabolite":"#99D400FF", "DNA replication":"#9FD500FF", "G2-M phase":"#A4D700FF", "CDK1":"#AAD800FF", "M phase":"#B0D900FF", "AURKA":"#B5DB00FF", "cytokenesis":"#BBDC00FF", "KIF11":"#C1DD00FF", "MPS1":"#C7DF00FF", "S-G2 phase":"#CDE000FF", "NF-kB signaling inhibitor":"#D3E100FF", "NFKB1":"#D9E300FF", "nuclear receptor":"#DFE400FF", "RARB":"#E6E600FF", "RORB":"#E6E105FF", "RXR":"#E6DD09FF", "RXRA":"#E6D90EFF", "other":"#E7D513FF", "other kinase":"#E7D218FF", "ALK5":"#E7CE1CFF", "Bcr-Abl":"#E7CB21FF", "CSNK2A1":"#E8C826FF", "PRKCA":"#E8C52BFF", "ROCK1":"#E8C22FFF", "oxidative stress inducer":"#E8C034FF", "CDPK1":"#E9BE39FF", "glutathione blocker":"#E9BB3EFF", "Xc system":"#E9BA43FF", "mitochondria":"#E9B847FF", "MTC blocker":"#EAB64CFF", "complex III":"#EAB551FF", "NAMPT":"#EAB456FF", "thio-stress":"#EAB35BFF", "PI3K-mTOR signaling inhibitor":"#EBB260FF", "AKT1":"#EBB165FF", "GSK3B":"#EBB16AFF", "MTOR":"#EBB16FFF", "PI3K":"#ECB173FF", "protein synthesis blocker":"#ECB178FF", "PRKDC":"#ECB17DFF", "RNA synthesis":"#EDB282FF", "translation initiation ":"#EDB387FF", "XPO1":"#EDB48CFF", "Ras signaling":"#EDB591FF", "COX10":"#EEB696FF", "MAP2K1":"#EEB89BFF", "MITF":"#EEBAA0FF", "RTK signaling":"#EEBCA5FF", "ERBB2":"#EFBEAAFF", "FGFR":"#EFC0AFFF", "FLT1":"#EFC3B5FF", "IGFR1":"#EFC6BAFF", "KDR":"#F0C9BFFF", "KIT":"#F0CCC4FF", "PDGFRB":"#F0CFC9FF", "survival blocker":"#F0D3CEFF", "Bcl family":"#F1D7D3FF", "BCL2":"#F1DBD8FF", "IAP family":"#F1DFDEFF", "XIAP":"#F1E4E3FF", "TCR signaling":"#F2E8E8FF", "ITK":"#F2EDEDFF", "LCK":"#F2F2F2FF"
//"agiotensin antagonist":"#9E0142", "AGT":"#A30743", "apoptosis inducer":"#A90D44", "autophay inducer":"#AF1446", "PIKFYVE":"#B41A47", "BCR signaling":"#BA2048", "BTK":"#C0274A", "SYK":"#C62D4B", "TNF":"#CB334C", "DNA damage inducer":"#D13A4E", "CHEK1":"#D63F4E", "CHEK2":"#D9444D", "epigenetic modulator":"#DC494C", "BRD4":"#DF4E4A", "HDAC1":"#E35349", "ER stress inducer":"#E65848", "BIRC5":"#E95D47", "EEF1A1":"#EC6245", "HSP90AB1":"#F06744", "PSMD1":"#F36C43", "SERCA":"#F47245", "VCP":"#F57948", "glycolysis inhibitor":"#F67F4B", "HK1":"#F7864E", "Jak-Stat signaling":"#F88D51", "IL12":"#F99455", "JAK1":"#FA9B58", "JAK2":"#FBA15B", "STAT3":"#FCA85E", "TYK2":"#FDAF61", "Met signaling inhibitor":"#FDB466", "MET":"#FDB96A", "mitotic blocker":"#FDBE6E", "G1 phase":"#FDC373", "antimetabolite":"#FDC977", "DNA replication":"#FDCE7C", "G2-M phase":"#FDD380", "CDK1":"#FDD884", "M phase":"#FDDD89", "AURKA":"#FEE18E", "cytokenesis":"#FEE593", "KIF11":"#FEE899", "MPS1":"#FEEB9E", "S-G2 phase":"#FEEEA3", "NF-kB signaling inhibitor":"#FEF2A9", "NFKB1":"#FEF5AE", "nuclear receptor":"#FEF8B4", "RARB":"#FEFBB9", "RORB":"#FFFFBF", "RXR":"#FCFDBA", "RXRA":"#F9FCB6", "other":"#F7FBB2", "other kinase":"#F4FAAE", "ALK5":"#F1F9AA", "Bcr-Abl":"#EFF8A6", "CSNK2A1":"#ECF7A2", "PRKCA":"#EAF69E", "ROCK1":"#E7F59A", "oxidative stress inducer":"#E3F498", "CDPK1":"#DDF199", "glutathione blocker":"#D7EF9B", "Xc system":"#D1EC9C", "mitochondria":"#CAEA9D", "MTC blocker":"#C4E79E", "complex III":"#BEE5A0", "NAMPT":"#B8E2A1", "thio-stress":"#B2E0A2", "PI3K-mTOR signaling inhibitor":"#ACDDA3", "AKT1":"#A5DAA4", "GSK3B":"#9ED7A4", "MTOR":"#96D5A4", "PI3K":"#8FD2A4", "protein synthesis blocker":"#88CFA4", "PRKDC":"#81CCA4", "RNA synthesis":"#7AC9A4", "translation initiation ":"#72C7A4", "XPO1":"#6BC4A4", "Ras signaling":"#64C0A5", "COX10":"#5FBAA8", "MAP2K1":"#5AB4AA", "MITF":"#54AEAC", "RTK signaling":"#4FA8AF", "ERBB2":"#49A2B2", "FGFR":"#449CB4", "FLT1":"#3F96B7", "IGFR1":"#3990B9", "KDR":"#348ABB", "KIT":"#3484BB", "PDGFRB":"#397EB8", "survival blocker":"#3D78B5", "Bcl family":"#4272B2", "BCL2":"#476CB0", "IAP family":"#4B66AD", "XIAP":"#5060AA", "TCR signaling":"#545AA7", "ITK":"#5954A4", "LCK":"#5E4FA2"
"agiotensin antagonist":"#A6CEE3", "AGT":"#97C5DE", "apoptosis inducer":"#89BCD9", "autophay inducer":"#7BB3D4", "PIKFYVE":"#6DAACF", "BCR signaling":"#5FA1CA", "BTK":"#5198C5", "SYK":"#438FC0", "TNF":"#3586BB", "DNA damage inducer":"#277DB6", "CHEK1":"#257CB2", "CHEK2":"#3487AD", "epigenetic modulator":"#4391A9", "BRD4":"#539CA5", "HDAC1":"#62A7A0", "ER stress inducer":"#71B19C", "BIRC5":"#80BC98", "EEF1A1":"#90C793", "HSP90AB1":"#9FD28F", "PSMD1":"#AEDC8A", "SERCA":"#A7D982", "VCP":"#9AD378", "glycolysis inhibitor":"#8CCC6E", "HK1":"#7FC664", "Jak-Stat signaling":"#72BF5B", "IL12":"#65B851", "JAK1":"#58B247", "JAK2":"#4AAB3D", "STAT3":"#3DA533", "TYK2":"#379F2E", "Met signaling inhibitor":"#4B9F39", "MET":"#609E44", "mitotic blocker":"#759E50", "G1 phase":"#8A9D5B", "antimetabolite":"#9F9C67", "DNA replication":"#B49C72", "G2-M phase":"#C89B7D", "CDK1":"#DD9A89", "M phase":"#F29A94", "AURKA":"#F99291", "cytokenesis":"#F78484", "KIF11":"#F47777", "MPS1":"#F26A6A", "S-G2 phase":"#EF5C5D", "NF-kB signaling inhibitor":"#ED4F50", "NFKB1":"#EA4243", "nuclear receptor":"#E83436", "RARB":"#E52729", "RORB":"#E31A1C", "RXR":"#E52B24", "RXRA":"#E83C2D", "other":"#EB4D35", "other kinase":"#ED5E3E", "ALK5":"#F06F47", "Bcr-Abl":"#F3814F", "CSNK2A1":"#F59258", "PRKCA":"#F8A361", "ROCK1":"#FBB469", "oxidative stress inducer":"#FDBC6A", "CDPK1":"#FDB55E", "glutathione blocker":"#FDAF53", "Xc system":"#FDA847", "mitochondria":"#FDA13C", "MTC blocker":"#FE9B30", "complex III":"#FE9425", "NAMPT":"#FE8D19", "thio-stress":"#FE870D", "PI3K-mTOR signaling inhibitor":"#FE8002", "AKT1":"#FA8311", "GSK3B":"#F58828", "MTOR":"#EF8D3E", "PI3K":"#EA9354", "protein synthesis blocker":"#E4986A", "PRKDC":"#DE9D81", "RNA synthesis":"#D9A397", "translation initiation ":"#D3A8AD", "XPO1":"#CEADC4", "Ras signaling":"#C8AFD4", "COX10":"#BEA3CE", "MAP2K1":"#B497C8", "MITF":"#AA8BC2", "RTK signaling":"#A07EBB", "ERBB2":"#9672B5", "FGFR":"#8C66AF", "FLT1":"#825AA9", "IGFR1":"#784EA2", "KDR":"#6E419C", "KIT":"#734999", "PDGFRB":"#825D99", "survival blocker":"#927199", "Bcl family":"#A18599", "BCL2":"#B19999", "IAP family":"#C0AE99", "XIAP":"#D0C299", "TCR signaling":"#DFD699", "ITK":"#EFEA99", "LCK":"#FFFF99"
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg")
    .attr("width", width)
    .attr("height", height)
    .append("svg:g")
    .attr("id", "container")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.layout.partition()
    .size([2 * Math.PI, radius * radius])
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return d.x; })
    .endAngle(function(d) { return d.x + d.dx; })
    .innerRadius(function(d) { return Math.sqrt(d.y); })
    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

// Use d3.text and d3.csv.parseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
d3.text("dat.csv", function(text) {
  var csv = d3.csv.parseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {

  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition.nodes(json)
      .filter(function(d) {
      return (d.dx > 0.005); // 0.005 radians = 0.29 degrees
      });

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", function(d) { return d.depth ? null : "none"; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors[d.name]; })
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.node().__data__.value;
 };

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {

  //var percentage = (100 * d.value / totalSize).toPrecision(3);
  //var percentageString = percentage + "%";
  var percentageString = d.value;
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage")
      .text(percentageString);

  d3.select("#explanation")
      .style("visibility", "");

  var sequenceArray = getAncestors(d);
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path")
      .style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(function(node) {
                return (sequenceArray.indexOf(node) >= 0);
              })
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {

  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .each("end", function() {
              d3.select(this).on("mouseover", mouseover);
            });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
function getAncestors(node) {
  var path = [];
  var current = node;
  while (current.parent) {
    path.unshift(current);
    current = current.parent;
  }
  return path;
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {

  // Data join; key function combines name and depth (= position in sequence).
  var g = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, function(d) { return d.name + d.depth; });

  // Add breadcrumb and label for entering nodes.
  var entering = g.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", function(d) { return colors[d.name]; });

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.name; });

  // Set position for entering and updating nodes.
  g.attr("transform", function(d, i) {
    return "translate(" + i * (b.w + b.s) + ", 0)";
  });

  // Remove exiting nodes.
  g.exit().remove();

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");

}

function drawLegend() {

  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 200, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", function(d, i) {
              return "translate(0," + i * (li.h + li.s) + ")";
           });

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", function(d) { return d.value; });

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function(d) { return d.key; });
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by comas. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {"name": "root", "children": []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split(":");
	//console.log(parts);
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
   // Not yet at the end of the sequence; move down the tree.
 	var foundChild = false;
 	for (var k = 0; k < children.length; k++) {
 	  if (children[k]["name"] == nodeName) {
 	    childNode = children[k];
 	    foundChild = true;
 	    break;
 	  }
 	}
  // If we don't already have a child node for this branch, create it.
 	if (!foundChild) {
 	  childNode = {"name": nodeName, "children": []};
 	  children.push(childNode);
 	}
 	currentNode = childNode;
      } else {
 	// Reached the end of the sequence; create a leaf node.
 	childNode = {"name": nodeName, "size": size};
 	children.push(childNode);
      }
    }
  }
  return root;
};