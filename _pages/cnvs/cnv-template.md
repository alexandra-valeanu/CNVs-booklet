---
layout: cnv-page
classes: wide
toc: true
title: ""
permalink:  # eg: /16p13.11/
author_profile: false
cnv:  # eg: 16p13.11
---

<!-- Data is pulled from _data/cnv-data.yml based on page.cnv -->

<!-- CNV description fetched from the ORPHADATA via the API with granted access-->
### Description
<p>ORPHAnet: Get it if available from ORPHADATA via their API when given access</p>

### Chromosomal location
{% assign chr = site.data.cnv-data[page.cnv].chromosome %}
{% assign start = site.data.cnv-data[page.cnv].start %}
{% assign end = site.data.cnv-data[page.cnv].end %}

<p>Chr{{ chr }}:{{ start }}-{{ end }}</p>

<!-- TODO Sequence Viewer -->
</p> Add image like the genome viewer <!-- TODO --> </p>

### Prevalence <!-- TODO -->
<p>Get it if available from ORPHADATA via their API when given access</p>

### Prevalence <!-- TODO -->
<p>Get it if available from ORPHADATA via their API when given access</p>

### Common phenotypic features <!-- TODO -->
<p>{{ site.data.cnv-data[page.cnv].phenotypic_features }}</p>

### Detailed clinical description <!-- TODO -->
<p>Get it if available from ORPHADATA via their API when given access</p>

<!-- WikiPathways Viewer-->
### Interactive Pathway Viewer
<!-- In the pathway_id = site.data['wikipathways-ids']['cnv'] change the cnv with the name of the CNV that is already stored in the _data/wikipathways-ids.yml -->
{% assign pathway_id = site.data.cnv-data[page.cnv].wikipathways_id %}
{% include wikipathway-viewer.html id=pathway_id %}

<!-- Get the Gene table from _includes/gene-table.html
There we have the structure of the table to which we can add dynamically the rows based on the given geneSymbols list -->
# Gene Information 
{% include gene-table.html %} <!-- from _includes/gene-table.html -->

<!-- Call the function to add to the Gene table the information fetched from HGNC and from ORPHADATA -->
<script type="module">
    import { displayGeneLinks } from '/assets/js/populate-gene-table.js';

    const geneSymbols = {% assign gene_list = site.data.cnv-data[page.cnv].genes %}{{ gene_list | jsonify }};
    displayGeneLinks(geneSymbols);
</script>

<!-- TODO: Fix the references so they can be linked in the text -->
### References
<p>
[1]: "16p13.11 deletion study". GIRIRAJAN LAB, https://autism.bx.psu.edu/rare_cnv/16p13.html, Retrieved 19 Feb 2025. <br>
</p>
