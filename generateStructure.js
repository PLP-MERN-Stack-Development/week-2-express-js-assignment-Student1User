const fs = require('fs');
const path = require('path');

const structure = {
  files: [
    '.env',
    '.env.example',
    '.gitignore',
    'package.json',
    'README.md',
    'server.js'
  ],
  folders: {
    routes: ['productRoutes.js'],
    controllers: ['productController.js'],
    middleware: [
      'authMiddleware.js',
      'errorMiddleware.js',
      'loggerMiddleware.js',
      'validationMiddleware.js'
    ],
    models: ['productModel.js'],
    utils: ['errors.js']
  }
};

const basePath = __dirname;

function createFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
    console.log(`Created file: ${filePath}`);
  }
}

function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Created folder: ${folderPath}`);
  }
}

function generateStructure() {
  // Create root files
  structure.files.forEach(file => {
    createFile(path.join(basePath, file));
  });

  // Create folders and their files
  Object.entries(structure.folders).forEach(([folder, files]) => {
    const folderPath = path.join(basePath, folder);
    createFolder(folderPath);

    files.forEach(file => {
      createFile(path.join(folderPath, file));
    });
  });
}

generateStructure();
