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
        <th>Known Name</th>
        <th>Locus</th>
        <th>Chromosome</th>
        <th>Start</th>
        <th>End</th>
        <th>Genes</th>
        <!-- <th>Critical region genes</th> -->
        <th>Associated Diseases</th>
        <th>WikiPathways ID</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td><a href="/22q11-2/">22q11.21</a></td>
            <td>DiGeorge syndrome (deletion)</td>
            <td>22q11.21</td>
            <td>22</td>
            <td>18912231</td>
            <td>21465672</td>
            <td>PRODH, DGCR2, ESS2, TSSK2, GSC2, SLC25A1, CLTCL1, HIRA, MRPL40, C22orf39, UFD1, CDC45, CLDN5, SEPTIN5, GP1BB, TBX1, GNB1L, RTL10, TXNRD2, COMT, ARVCF, TANGO2, DGCR8, TRMT2A, RANBP1, ZDHHC8, RTN4R, DGCR6L, GGTLC3, RIMBP3, FAM230A, USP41P, ZNF74, SCARF2, KLHL22, MED15, PI4KA, SERPIND1, SNAP29, CRKL, AIFM3, LZTR1, THAP7, P2RX6, SLC7A4, LRRC74B</td>
            <td>Heart defects, Schizophrenia, Autism, and more to be added</td>
            <td><a href="https://www.wikipathways.org/instance/WP4657">WP4657</a></td>
        </tr>
        <tr>
            <td><a href="/16p13-11/">16p13.11</a></td>
            <td>Unknown</td>
            <td>16p13.11</td>
            <td>16</td>
            <td>15511655</td>
            <td>16293689</td>
            <td>BMERB1, MARF1, NDE1, MYH11, CEP20, ABCC1, ABCC6</td>
            <td>Schizophrenia, Autism, Epilepsy, and more to be added</td>
            <td><a href="https://www.wikipathways.org/pathways/WP5502.html">WP5502</a></td>
        </tr>
        <tr>
            <td>CNV0003</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
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

    $('#gene-filter').on('keyup', function () {
        var searchTerm = this.value.toLowerCase();
        var searchTerms = searchTerm.split(/\s*,\s*/);  // Split by comma to handle multiple terms

        if (searchTerm === '') {
            // Reset the custom filter when input is empty
            table.rows().every(function () {
                $(this.node()).show(); 
            });
            table.search('').draw(); 
            return;
        }

        table.column(6).search('', false, false).draw();
        table.rows().every(function () {
            var rowData = this.data();
            var genes = rowData[6].toLowerCase().split(/\s*,\s*/); 

            if (searchTerms.every(term => genes.some(gene => gene.toLowerCase() === term))) {
                $(this.node()).show(); // Show matching row
            } else {
                $(this.node()).hide();
            }
        });
    });

    $('#phenotype-filter').on('keyup', function () {
        table.column(7).search(this.value, true, false).draw();
    });
});
</script>
