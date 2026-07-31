package com.resumeanalyzer.backend.storage;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;

@Service
public class FileStorageService {

    private final Path uploadDir = Paths.get("uploads");

    public String saveFile(MultipartFile file) throws IOException {

        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }

        Path filePath = uploadDir.resolve(file.getOriginalFilename());

        Files.copy(file.getInputStream(),
                filePath,
                StandardCopyOption.REPLACE_EXISTING);

        return filePath.toString();
    }
}