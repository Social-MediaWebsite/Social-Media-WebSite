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
  `userPassword` VARCHAR(225) NOT NULL,
  `userImage` VARCHAR(225) NOT NULL DEFAULT 'no content',
  `createdAt` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 6

DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_media_website`.`postes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_media_website`.`postes` (
  `postId` INT NOT NULL AUTO_INCREMENT,
  `po_content` VARCHAR(255) NOT NULL,
  `po_image` VARCHAR(255) NOT NULL DEFAULT 'no content',
  `po_publishedAt` VARCHAR(255) NOT NULL,
  `po_updatedAt` VARCHAR(255) NOT NULL,
  `po_userId` INT NOT NULL,
  PRIMARY KEY (`postId`),
  INDEX `fk_postes_users1_idx` (`po_userId` ASC) VISIBLE,
  CONSTRAINT `fk_postes_users1`
    FOREIGN KEY (`po_userId`)
    REFERENCES `social_media_website`.`users` (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
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
    REFERENCES `social_media_website`.`postes` (`postId`),
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`co_userId`)
    REFERENCES `social_media_website`.`users` (`userId`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
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

    REFERENCES `social_media_website`.`users` (`userId`))
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

  CONSTRAINT `fk_likes_postes1`
    FOREIGN KEY (`po_postId`)
    REFERENCES `social_media_website`.`postes` (`postId`),
  CONSTRAINT `fk_likes_users1`
    FOREIGN KEY (`li_userId`)
    REFERENCES `social_media_website`.`users` (`userId`))
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
    REFERENCES `social_media_website`.`comments` (`commentId`),
  CONSTRAINT `fk_reply_users1`
    FOREIGN KEY (`re_userId`)
    REFERENCES `social_media_website`.`users` (`userId`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO users values(1,"houssem","houusem@gmail.com","00","https://shorturl.at/elGH8","11:20 Tue Dec 12 2023");
INSERT INTO users values(2,"mouhib","mouhib@gmail.com","jerba","https://shorturl.at/jnGX3","12:20 Tue Dec 12 2023");
INSERT INTO users values(3,"oussema","oussema@gmail.com","ou11hh","https://shorturl.at/irL69","12:20 Tue Dec 12 2023");
INSERT INTO users values(4,"ali","ali@gmail.com","00000","https://shorturl.at/qAD03","12:20 Tue Dec 13 2023");
INSERT INTO postes values(1,"hello my friends my name is houssem","https://shorturl.at/jkxY9","14:10 
Tue Dec 13 2023","14:10 Tue Dec 13 2023",1);
INSERT INTO postes values(2,"if it works don't touch it!","https://shorturl.at/bvNUX","16:15
Tue Dec 13 2023","14:10 Tue Dec 13 2023",3);
INSERT INTO postes values(3,"bendoubel","https://shorturl.at/pBNR1","16:15
Tue Dec 13 2023","14:10 Tue Dec 13 2023",2);
INSERT INTO postes values(4,"jerrba :)","https://shorturl.at/bczXY","16:40
Tue Dec 13 2023","16:40 Tue Dec 13 2023",2);
INSERT INTO postes values(5,"i enjoy my time playing lol","https://shorturl.at/ABOVY","20:24
Tue Dec 13 2023","20:24 Tue Dec 13 2023",1);

INSERT INTO comments values(1	,"hi i'm mouhib hhh","https://shorturl.at/txFR1","22:38 Wed Dec 13 2023",	"22:38 Wed Dec 13 2023",1,2);
INSERT INTO comments values(2,"hi i'm oussema","https://shorturl.at/eEX12"	,"22:39 Wed Dec 13 2023"	,"22:39 Wed Dec 13 2023",	1,3);

INSERT INTO friends values(1,2);
INSERT INTO friends values(3,2);
INSERT INTO friends values(4,2);