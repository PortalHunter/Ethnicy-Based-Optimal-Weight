# Third-party material

The OCR prompt in `research_models.py` reproduces the text returned by `build_no_anchoring_v4_yaml_prompt` from the Allen Institute for AI olmOCR project's `olmocr/prompts/prompts.py`, retrieved18November2026:
https://github.com/allenai/olmocr/blob/main/olmocr/prompts/prompts.py

The upstream project is licensed under Apache License2.0. Its unmodified license is included in `third_party/olmocr-LICENSE`. The surrounding helper, native-text fallback, offline local model loading, source metadata and output checks are Atlas additions; this is not the full upstream olmOCR pipeline.

Model weights are downloaded locally rather than redistributed in Git. Their precise revisions, publisher-declared licenses and file hashes are recorded in `hf_models.lock.json`. The installed NCBI model directories include their public-domain LICENSE notices. Publisher README/license files are retained with each snapshot. Python dependency versions are frozen in `requirements-research.lock.txt`; installed distribution license metadata is recorded in the local environment's `dependency-licenses.json`.
