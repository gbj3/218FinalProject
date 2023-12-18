import React from 'react';
import { Text,  Link, Modal, ModalOverlay, 
    ModalContent, ModalHeader, ModalFooter, 
    ModalBody, ModalCloseButton, useDisclosure,  } from '@chakra-ui/react';

const Privacy = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
            <>
                <Link onClick={onOpen}>Privacy Policy</Link>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Privacy Policy</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>This Privacy Policy ("Policy") describes how [Coffee Shop] ("we," "us," or "our") collects, uses, and shares personal information of users of this website, [218-final-project.vercel.com] (the "Site"). Please read the following information carefully to understand our practices regarding your personal data and how we will treat it.

1. Information We Collect

We may collect and process the following data about you:

Information You Provide: We collect information you provide when you use our Site, subscribe to our newsletter, or communicate with us.

Automatically Collected Information: We may automatically log information about you and your computer. For example, when visiting our Site, we log your computer's operating system, browser type, and IP address.

Cookies: We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. We may use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Site.

2. How We Use Your Information

We use information about you for various purposes, including:

To provide, maintain, and improve our Site.
To send you information, including confirmations, technical notices, updates, security alerts, and support and administrative messages.
To respond to your comments, questions, and requests, and provide customer service.
3. Sharing of Your Information

We will not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.

4. Your Rights

You have the right to:

Request information about how your personal data is processed.
Request a copy of the personal data that we hold about you.
Request that we correct, update, or delete your personal information.
5. Security

We are committed to ensuring that your information is secure. We have implemented reasonable measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.

6. Changes to This Privacy Policy

We may update this Privacy Policy to reflect changes to our information practices. We encourage you to periodically review this page for the latest information on our privacy practices.</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Link onClick={onClose}>
                                Close
                            </Link>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
    );
};

export default Privacy;