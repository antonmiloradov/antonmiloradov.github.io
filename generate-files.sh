# brew install pandoc

for dir in ./src/pages/*/; do
  name=$(basename "$dir")
  out_dir="./static/files/${name}"
  input="${dir}index.md"

  mkdir -p "$out_dir"

  echo "Converting '${name}'..."

  pandoc --from=markdown+hard_line_breaks --wrap=preserve "${input}" -o "${out_dir}/${name}.epub" && echo -e "[EPUB]\tOK"
  pandoc --from=markdown+hard_line_breaks --wrap=preserve "${input}" -o "${out_dir}/${name}.fb2" && echo -e "[FB2]\tOK"
  npx markdown-pdf "${input}" -o "${out_dir}/${name}.pdf" && echo -e "[PDF]\tOK"
done
