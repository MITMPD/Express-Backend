const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    ID: {
        type:Number
    },
    molfile: {
        type: String,
    },
    Molfile: {
        type: String
    },
    Origin: {
        type: String
    },
    Common_Name: {
        type: String
    },
    Introduction: {
        type: String
    },
    Synonym: {
        type: String
    },
    Species_Name: {
        type: String
    },
    Plant_part: {
        type: String
    },
    Name_of_small_molecule_or_Compound: {
        type: String
    },
    SMILES: {
        type: String
    },
    PubChem_Id: {
        type: String
    },
    PubChem_link: {
        type: String
    },
    DrugBank_Id: {
        type: String
    },
    Drugbank_link: {
        type: String
    },
    PubMed_Id_for_disease_reference: {
        type: String
    },
    PubMed_link: {
        type: String
    },
    Symptoms: {
        type: String
    },
    Disease_Name: {
        type: String
    },
    Pathway_KEGG_link_or_PubMed_Link: {
        type: String
    },
    Pathway_url: {
        type: String
    },
    MoA: {
        type: String
    },
    Gene_Name: {
        type: String
    },
    Target_gene_NCBI_Link: {
        type: String
    },
    Gene_link: {
        type: String
    },
    Protein_Name: {
        type: String
    },
    Target_Protein_Uniprot_Link: {
        type: String
    },
    Protein_link: {
        type: String
    },
    Protein_3D_Structure_PDB_link_with_visualization_and_download_option: {
        type: String
    },
    Protein_Structure_link: {
        type: String
    },
    Protein_Function: {
        type: String
    },
    Target_amino_acid_sequence: {
        type: String
    },
    Target_Protein_Interaction_STRING_Link_and_network_visualization: {
        type: String
    },
    String_link: {
        type: String
    },
    Route_of_administration: {
        type: String
    },

    ADME: {
        type: String
    },
    Biological_Assay: {
        type: String
    },
    Side_Effects_or_Toxicity: {
        type: String
    },
    Similar_Compounds: {
        type: String
    },
    Genome_Sequence_Link: {
        type: String
    },
    Picture_of_plant: {
        type: String
    },
    Therapeutic: {
        type: String
    }
});

const Mpd = mongoose.model('Mpd', userSchema);
module.exports = Mpd;