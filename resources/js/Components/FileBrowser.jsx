import { FullFileBrowser } from "chonky";

export default function FileBrowser() {
    const files = [
        { id: 'one', name: 'test_folder', isDir: true },
        { id: 'two', name: 'file', thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png' }
    ];
    const folderChain = [{ id: 'root', name: 'root', isDir: true }];

    return (<FullFileBrowser files={files} folderChain={folderChain} />);
}