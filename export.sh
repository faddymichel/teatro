cat script.js | tee index.js index.mjs > /dev/null

echo '' >> index.js
echo 'module .exports = Scenarist;' >> index.js

echo '' >> index.mjs
echo 'export default Scenarist;' >> index.mjs
