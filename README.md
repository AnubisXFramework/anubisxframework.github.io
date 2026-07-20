# AnubisX Framework

A Formal Framework for Behavioral Digital Attribution

**Version:** 3.0.0 — Scientific Re-Architecture  
**Author:** Ahmed Awad (NullC0d3)
**ORCID:** https://orcid.org/0009-0005-0654-3393  
**DOI:** 10.5281/zenodo.21393392  
**License:** CC BY 4.0

## Overview

Digital attribution — determining the human source of digital actions and communications — is a foundational requirement across cyber threat intelligence, digital forensics, and counter-fraud. The AnubisX framework provides a formal methodology for behavioral digital attribution.

## Contributions

1. **Axiomatic Foundation** — 16 axioms governing attribution reasoning
2. **Cognitive Centroid Theory** — Formal model of behavioral identity as asymptotic attractor
3. **Mathematical Framework** — 292 objects across 24 categories
4. **Algorithmic Catalog** — 37 algorithms spanning 5 behavioral modalities
5. **Six-Layer Architecture** — Data, Feature, Profile, Comparison, Evidence, Decision
6. **Four-Tier Validation** — 31 pre-specified acceptance criteria

## Prototype

Anubis Twitter v2.5 — stylometric modality for Arabic Twitter data. 47 Python source files (~2,800 LOC). Implements Layers 1-4 of the architecture.

## Validation

15 proof-of-concept experiments on 31 Egyptian Twitter accounts demonstrate pipeline feasibility:
- 372-dimensional fingerprint extraction: 100% consistency
- FAISS search latency: 6–8 µs
- Cross-user similarity: μ = 0.697, σ = 0.105

## Limitations

- No ground-truth labels available
- 4 of 5 behavioral modalities untested
- Prototype limited to single modality, platform, language
- Not an operational system; research prototype

## Links

- GitHub: https://github.com/AnubisXFramework/AnubisXFramework
- Zenodo: https://zenodo.org/doi/10.5281/zenodo.21393392
- Website: https://anubisxframework.github.io
- Mirror: https://anubisxframework.nullc0d3.workers.dev

