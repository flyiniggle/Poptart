USE poptarts;
GO

SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP TABLE IF EXISTS securitymanager_assetclass;
CREATE TABLE IF NOT EXISTS securitymanager_assetclass (
  id int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1014 ;

DROP TABLE IF EXISTS securitymanager_security;
CREATE TABLE IF NOT EXISTS securitymanager_security (
  id int(11) NOT NULL AUTO_INCREMENT,
  ticker varchar(20) NOT NULL,
  CUSIP varchar(9) NOT NULL,
  description varchar(100) DEFAULT NULL,
  last_price double NOT NULL,
  segment int(11) NOT NULL DEFAULT '12',
  PRIMARY KEY (id),
  UNIQUE KEY ticker (ticker),
  UNIQUE KEY CUSIP (CUSIP),
  KEY securitymanager_security_segment_f481977_uniq (segment)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1013 ;

DROP TABLE IF EXISTS account_account;
CREATE TABLE IF NOT EXISTS account_account (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `inception_date` datetime,
  `total_cash` decimal(17,2),
  `expected_cash` decimal(17,2),
  `last_update` datetime,
  `client_1_id` int(11),
  `manager` int(11),
  `solution_name` varchar(255),
  `max_pos_drift` decimal(10,4),
  `max_cash_drift` decimal(10,4),
  `max_total_drift` decimal(10,4),
  PRIMARY KEY (id),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

DROP TABLE IF EXISTS account_holding;
CREATE TABLE IF NOT EXISTS account_holding (
  id int(11) NOT NULL AUTO_INCREMENT,
  quantity double NOT NULL,
  expected_quantity double NOT NULL,
  security_id int(11) NOT NULL,
  account_id int(11),
  expected_value decimal(17,2),
  PRIMARY KEY (id),
  KEY account_holding_8a089c2a (account_id),
  KEY account_hold_security_id_36d54736_fk_securitymanager_security_id (security_id)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

ALTER TABLE `account_holding`
  ADD CONSTRAINT account_hold_security_id_36d54736_fk_securitymanager_security_id FOREIGN KEY (security_id) REFERENCES securitymanager_security (id);

GO
LOAD DATA LOCAL INFILE 'asset_classes_data.txt' INTO TABLE securitymanager_assetclass COLUMNS TERMINATED BY ';';
LOAD DATA LOCAL INFILE 'securities_data.txt' INTO TABLE securitymanager_security COLUMNS TERMINATED BY ';';
LOAD DATA LOCAL INFILE 'accounts_BigMcLargeHuge_data.txt' INTO TABLE account_account COLUMNS TERMINATED BY ';';
LOAD DATA LOCAL INFILE 'holdings_BigMcLargeHuge_data.txt' INTO TABLE account_holding COLUMNS TERMINATED BY ';';
GO