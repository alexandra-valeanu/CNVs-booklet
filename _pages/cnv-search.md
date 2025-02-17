---
layout: page
title: "CNV Search"
permalink: /cnv-search/
---

<!-- Home Button -->
<div style="position: absolute; top: 10px; left: 10px;">
    <a href="/" style="background-color: #4CAF50; color: white; padding: 8px 15px; text-decoration: none; border-radius: 5px;">
        ⬅ Home
    </a>
</div>

<!-- Title Centered -->
<div style="text-align: center;">
    <h1>Copy Number Variants</h1>
</div>

<div style="padding-top: 40px;">
</div>

<!-- Filters -->
<label>Filter by Gene: <input type="text" id="gene-filter" placeholder="Enter gene name"></label>
<label>Filter by Phenotype: <input type="text" id="phenotype-filter" placeholder="Enter phenotype"></label>

<style>
    #cnv-table th, 
    #cnv-table td {
        text-align: left;
        vertical-align: middle;
    }
</style>

<!-- CNV Table -->
<table id="cnv-table" class="display">
    <thead>
        <tr>
        <th>CNV</th>
        <th>CNV Type</th>
        <th>Known Name</th>
        <th>Locus</th>
        <th>Chromosome</th>
        <th>Start</th>
        <th>End</th>
        <th>Genes</th>
        <th>Associated Diseases</th>
        <th>WikiPathways ID</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td><a href="/22q11-2/">22q11.21</a></td>
            <td>Deletion</td>
            <td>DiGeorge syndrome</td>
            <td>22q11.21</td>
            <td>22</td>
            <td>18912231</td>
            <td>21465672</td>
            <td>PRODH, DGCR2, ESS2, TSSK2, GSC2, SLC25A1, CLTCL1, HIRA, MRPL40, C22orf39, UFD1, CDC45, CLDN5, SEPTIN5, GP1BB, TBX1, GNB1L, RTL10, TXNRD2, COMT, ARVCF, TANGO2, DGCR8, TRMT2A, RANBP1, ZDHHC8, RTN4R, DGCR6L, GGTLC3, RIMBP3, FAM230A, USP41P, ZNF74, SCARF2, KLHL22, MED15, PI4KA, SERPIND1, SNAP29, CRKL, AIFM3, LZTR1, THAP7, P2RX6, SLC7A4, LRRC74B</td>
            <td>Heart defects, Schizophrenia</td>
            <td><a href="https://www.wikipathways.org/instance/WP4657">WP4657</a></td>
        </tr>
        <tr>
            <td>CNV002</td>
            <td>16</td>
            <td>29500000</td>
            <td>30100000</td>
            <td>Autism, Schizophrenia</td>
            <td>WP000002</td>
        </tr>
        <tr>
            <td>CNV003</td>
            <td>DISC1</td>
            <td>1</td>
            <td>230000000</td>
            <td>231000000</td>
            <td>Schizophrenia</td>
            <td>WP000003</td>
        </tr>
    </tbody>
</table>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">

<script>
$(document).ready(function () {
    var table = $('#cnv-table').DataTable({
        "paging": true,
        "searching": true,
        "ordering": true
    });

    // Custom filtering for Genes (handles multiple genes in one row)
    $('#gene-filter').on('keyup', function () {
        var searchTerm = this.value.toLowerCase();

        table.column(1).search('', false, false).draw(); // Reset search

        table.rows().every(function () {
            var rowData = this.data();
            var genes = rowData[1].toLowerCase().split(/\s*,\s*/); // Split genes by comma and space
            if (genes.some(gene => gene.includes(searchTerm))) {
                this.node().style.display = "";
            } else {
                this.node().style.display = "none";
            }
        });
    });

    // Custom filtering for Phenotypes (handles multiple phenotypes in one row)
    $('#phenotype-filter').on('keyup', function () {
        var searchTerm = this.value.toLowerCase();

        table.column(5).search('', false, false).draw(); // Reset search

        table.rows().every(function () {
            var rowData = this.data();
            var phenotypes = rowData[5].toLowerCase().split(/\s*,\s*/); // Split phenotypes by comma and space
            if (phenotypes.some(phenotype => phenotype.includes(searchTerm))) {
                this.node().style.display = "";
            } else {
                this.node().style.display = "none";
            }
        });
    });
});

</script>