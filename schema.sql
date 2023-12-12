-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema social_media_website
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema social_media_website
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `social_media_website` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `social_media_website` ;

-- -----------------------------------------------------
-- Table `social_media_website`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `userEmail` VARCHAR(225) NOT NULL,
  `userPassword` VARCHAR(45) NOT NULL,
  `userImage` VARCHAR(225) NOT NULL DEFAULT 'no content',
  `createdAt` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_media_website`.`postes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`postes` (
  `postId` INT NOT NULL AUTO_INCREMENT,
  `po_content` VARCHAR(45) NOT NULL,
  `po_image` VARCHAR(45) NOT NULL DEFAULT 'no content',
  `po_publishedAt` VARCHAR(45) NOT NULL,
  `po_updatedAt` VARCHAR(45) NOT NULL,
  `po_userId` INT NOT NULL,
  PRIMARY KEY (`postId`),
  INDEX `fk_postes_users1_idx` (`po_userId` ASC) VISIBLE,
  CONSTRAINT `fk_postes_users1`
    FOREIGN KEY (`po_userId`)
    REFERENCES `social_media_website`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_media_website`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`comments` (
  `commentId` INT NOT NULL AUTO_INCREMENT,
  `co_Content` VARCHAR(225) NOT NULL,
  `co_Image` VARCHAR(225) NOT NULL DEFAULT 'no content',
  `co_publishedAt` VARCHAR(45) NOT NULL,
  `co_updatedAt` VARCHAR(45) NOT NULL,
  `po_postId` INT NOT NULL,
  `co_userId` INT NOT NULL,
  PRIMARY KEY (`commentId`),
  INDEX `fk_comments_postes1_idx` (`po_postId` ASC) VISIBLE,
  INDEX `fk_comments_users1_idx` (`co_userId` ASC) VISIBLE,
  CONSTRAINT `fk_comments_postes1`
    FOREIGN KEY (`po_postId`)
    REFERENCES `social_media_website`.`postes` (`postId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`co_userId`)
    REFERENCES `social_media_website`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_media_website`.`friends`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`friends` (
  `friendsId` INT NOT NULL,
  `fr_userId` INT NOT NULL,
  INDEX `fk_friends_users_idx` (`fr_userId` ASC) VISIBLE,
  CONSTRAINT `fk_friends_users`
    FOREIGN KEY (`fr_userId`)
    REFERENCES `social_media_website`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_media_website`.`likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`likes` (
  `idlikes` INT NOT NULL AUTO_INCREMENT,
  `po_postId` INT NOT NULL,
  `li_userId` INT NOT NULL,
  PRIMARY KEY (`idlikes`),
  INDEX `fk_likes_users1_idx` (`li_userId` ASC) VISIBLE,
  INDEX `fk_likes_postes1_idx` (`po_postId` ASC) VISIBLE,
  CONSTRAINT `fk_likes_users1`
    FOREIGN KEY (`li_userId`)
    REFERENCES `social_media_website`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_likes_postes1`
    FOREIGN KEY (`po_postId`)
    REFERENCES `social_media_website`.`postes` (`postId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_media_website`.`reply`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`reply` (
  `replyId` INT NOT NULL AUTO_INCREMENT,
  `re_content` VARCHAR(225) NOT NULL,
  `re_image` VARCHAR(225) NOT NULL DEFAULT 'no content',
  `re_publishedAt` VARCHAR(45) NOT NULL,
  `re_updatedAt` VARCHAR(45) NOT NULL,
  `co_commentId` INT NOT NULL,
  `re_userId` INT NOT NULL,
  PRIMARY KEY (`replyId`),
  INDEX `fk_reply_comments1_idx` (`co_commentId` ASC) VISIBLE,
  INDEX `fk_reply_users1_idx` (`re_userId` ASC) VISIBLE,
  CONSTRAINT `fk_reply_comments1`
    FOREIGN KEY (`co_commentId`)
    REFERENCES `social_media_website`.`comments` (`commentId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reply_users1`
    FOREIGN KEY (`re_userId`)
    REFERENCES `social_media_website`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO users values(1,"test","test@","00","lala","11:20 Tue Dec 12 2023");
INSERT INTO users values(2,"test2","test2@","000","no","12:20 Tue Dec 12 2023");